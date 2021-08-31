import { combineReducers } from 'redux';
import firebaseReducer from './firebase/firebase';
import comments from './comments';
import posts from './posts';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  comments,
  posts
});


export default rootReducer;