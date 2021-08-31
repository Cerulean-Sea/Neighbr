import axios from 'axios';
import api from '../../api/index';

export default = (dispatch) => {
  api.getPosts()
    .then((res) => dispatch({
      type: 'SET_POSTS',
      payload: res.data,
    }))
    .catch((err) => console.error(err));
};
