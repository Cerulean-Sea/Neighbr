import { combineReducers } from 'redux';
import firebaseReducer from './firebase/firebase';
import comments from './comments';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  comments
});


export default rootReducer;