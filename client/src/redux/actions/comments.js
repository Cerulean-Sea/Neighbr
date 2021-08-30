import { FETCH_COMMENTS, CREATE_COMMENT, LIKE_COMMENT, REPORT_COMMENT, DELETE_COMMENT } from './actionTypes';
import * as http from '../../api/';

export const getComments = () => async (dispatch) => {
  try {
    const { data } = await http.fetchComments();
    dispatch({ type: FETCH_COMMENTS, payload: data });
  } catch (error) {
    console.log('Failed to fetch comments: ', error);
  }
}

export const postComment = (commentInput) => async (dispatch) => {
  try {
    const { data } = await http.createComment(commentInput);
    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log('Failed to write comment: ', error);
  }
}

export const likeComment = (id) => async (dispatch) => {
  try {
    const { data } = await http.likeComment(id);
    dispatch({ type: LIKE_COMMENT, payload: data });
  } catch (error) {
    console.log('Failed to like comment: ', error);
  }
}

export const reportComment = (id) => async (dispatch) => {
  try {
    const { data } = await http.reportComment(id);
    dispatch({ type: REPORT_COMMENT, payload: data });
  } catch (error) {
    console.log('Failed to report comment: ', error);
  }
}

export const deleteComment = (id) => async (dispatch) => {
  try {
    await http.deleteComment(id);
    dispatch({ type: DELETE_COMMENT, payload: data });
  } catch (error) {
    console.log('Failed to delete comment: ', error);
  }
}