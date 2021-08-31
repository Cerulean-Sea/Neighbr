import axios from 'axios';
import * as api from '../../api';

// export default = (dispatch) => {
//   api.getPosts()
//     .then((res) => dispatch({
//       type: 'SET_POSTS',
//       payload: res.data,
//     }))
//     .catch((err) => console.error(err));
// };

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.postPost(post);
    console.log('Created post!');
    dispatch({type: 'CREATE_POST', payload: data});
  } catch (error) {
    console.log(error);
  }
};