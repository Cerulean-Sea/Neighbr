import { combineReducers } from 'redux';
import firebaseReducer from './firebase/firebase';
import posts from './posts';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  posts,
});


export default rootReducer;