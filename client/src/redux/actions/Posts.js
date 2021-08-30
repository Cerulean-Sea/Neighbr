import axios from 'axios';

export default = (dispatch) => {
  axios.get('/api/posts/',)
    .then((res) => dispatch({
      type: 'SET_POSTS',
      payload; res.data,
    }))
    .catch((err) => console.error(err));
};
