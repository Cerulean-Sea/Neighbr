import * as api from '../../api';

export const posts = async (dispatch, page, limit) => {
  const params = { page, limit }
  try {
    const { data } = await api.getPosts(params);
    dispatch({ type: 'SET_POSTS', payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const getPostsByUserId = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getPostsByUserId(userId);
    dispatch({ type: 'SET_POSTS', payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const getPostWithTagFilterByUserId = (userId, filters) => async (dispatch) => {
  try {
    const { data } = await api.getPostWithTagFilterByUserId(userId, filters);
    dispatch({ type: 'SET_POSTS', payload: data });
  } catch (err) {
    console.error(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.postPost(post);
    console.log('Created post!');
    dispatch({type: 'CREATE_POST', payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (postId, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(postId);
    dispatch({ type: 'UPDATE_POST', payload: data });
  } catch (error) {
    console.log(error)
  }
};