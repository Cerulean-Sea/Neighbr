import { combineReducers } from 'redux';
import firebaseReducer from './firebase/firebase';

const rootReducer = combineReducers({
  firebase: firebaseReducer
});


export default rootReducer;