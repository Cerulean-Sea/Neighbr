import axios from 'axios';

const url = 'http://localhost:3000/api/comments';

export const fetchComments = () => axios.get(`${url}`);
export const fetchComment = (id) => axios.get(`${url}/${id}`)
export const fetchCommentsByUser = (userId) => axios.get(`${url}/users/${userId}`)
export const createComment = (commentInput) => axios.post(`${url}/create`, commentInput);
export const likeComment = (id) => axios.patch(`${url}/${id}`);
export const reportComment = (id) => axios.patch(`${url}/${id}`);
export const deleteComment = (id) => axios.delete(`${url}/${id}`);