import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken, sendEmailVerification } from 'firebase/auth';
import * as api from '../../../api';
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const emailSignIn = (email, password) => async (dispatch) => {
  try {
    const payload = await signInWithEmailAndPassword(auth, email, password);
    console.log('Logged in!');
  } catch (error) {
    console.log('Error logging in', error);
  }
};

export const emailSignUp = (name, email, password, zip) => async (dispatch) => {
  try {
    const payload = await createUserWithEmailAndPassword(auth, email, password);
    const verifictionEmail = await sendEmailVerification(auth.currentUser);
    dispatch({type: 'AUTH', payload});
    const { data } = await api.signUp({name, email, userId: payload.user.uid, community: zip});
  } catch (error) {
    console.log(error);
  }
};

export const googleSignIn = () => async (dispatch) => {
  try {
    const provider = new GoogleAuthProvider();
    const payload = await signInWithPopup(auth, provider);
    dispatch({type: 'AUTH', payload});
  } catch (error) {
    console.log(error);
  }
}