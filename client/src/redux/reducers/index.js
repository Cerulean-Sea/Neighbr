import { combineReducers } from 'redux';
import firebaseReducer from './firebase/firebase';
import comments from './comments';
import posts from './posts';
import ShowPost from './ShowPost';
import ShowFilter from './ShowFilter';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  comments,
  posts,
  ShowPost,
  ShowFilter
});


export default rootReducer;