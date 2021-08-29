import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000/api'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))._tokenResponse.idToken}`;
  }
  return req;
});

// Posts
export const getPosts = () => API.get(`/posts`);
export const getPostById = (postId) => API.get(`/posts/${postId}`);
export const getPostsByUserId = (userId) => API.get(`/posts/users/${userId}`);
export const postPost = (post) => API.post(`/posts/create`, post);
export const updatePost = (postId, post) => API.patch(`/posts/${postId}`, post);
export const deletePost = (postId) => API.delete(`/posts/${postId}`);

// Comments
export const getComments = () => API.get(`/comments`);
export const getCommentById = (commentId) => API.get(`/comments/${commentId}`);
export const getCommentsByUserId = (userId) => API.get(`/comments/users/${userId}`);
export const postComment = (comment) => API.post(`/comments/create`, comment);
export const updateComment = (commentId, comment) => API.patch(`/comments/${commentId}`, comment);
export const deleteComment = (commentId) => API.delete(`/comments/${commentId}`);

// Users
export const signUp = (formData) => API.post(`/users/signup`, formData);
export const googleSignIn = (data) => API.post(`/users/signin/google`, data);