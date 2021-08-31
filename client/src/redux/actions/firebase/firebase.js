import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken, sendEmailVerification, updateProfile } from 'firebase/auth';
import * as api from '../../../api';
import firebaseConfig from './config';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);

export const emailSignIn = (email, password, history) => async (dispatch) => {
  try {
    const payload = await signInWithEmailAndPassword(auth, email, password);
    dispatch({type: 'AUTH', payload});
    console.log('Logged in!');
    history.push('/');
  } catch (error) {
    console.log('Error logging in', error);
  }
};

export const emailSignUp = (name, email, password, zip, history) => async (dispatch) => {
  try {
    const payload = await createUserWithEmailAndPassword(auth, email, password);
    const setDisplayName = await updateProfile(auth.currentUser, {displayName: name});
    const verifictionEmail = await sendEmailVerification(auth.currentUser);
    dispatch({type: 'AUTH', payload});
    const { data } = await api.signUp({name, email, userId: payload.user.uid, community: zip});
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const googleSignIn = (history) => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const payload = await signInWithPopup(auth, provider);
    dispatch({type: 'AUTH', payload});
    console.log('Logged in!');
    const { data } = await api.googleSignIn(payload.user);
    history.push('/');
  } catch (error) {
    console.log(error);
  }
}