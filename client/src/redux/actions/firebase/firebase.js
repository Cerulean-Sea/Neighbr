import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence, getIdToken } from 'firebase/auth';
import * as api from '../../../api';
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const emailSignIn = (email, password) => async (dispatch) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const payload = await signInWithEmailAndPassword(auth, email, password);
    dispatch({type: 'AUTH', payload});
  } catch (error) {
    console.log(error);
  }
};

export const emailSignUp = (email, password, community = 'Los Angeles') => async (dispatch) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const payload = await createUserWithEmailAndPassword(auth, email, password);
    dispatch({type: 'AUTH', payload});
    const { data } = await api.signUp({name: email, email, userId: payload.user.uid, community});
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