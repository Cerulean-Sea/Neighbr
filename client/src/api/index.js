import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000/api'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))._tokenResponse.idToken}`;
  }
  return req;
});

// Posts
export const getPosts = (params) => API.get(`/posts`, { params });
export const getPostById = (postId) => API.get(`/posts/${postId}`);
export const getPostsByUserId = (userId, params) => API.get(`/posts/users/${userId}`, { params });
export const getPostsByCommunity = (community) => API.get(`/posts/community/${community}`);
export const getPostWithTagFilter = (filters, params) => API.get(`/posts/filter/${filters}`, { params });
export const getPostWithTagFilterByUserId = (userId, filters, params) => API.get(`/posts/users/${userId}/filter/${filters}`, { params });
export const postPost = (post) => API.post(`/posts/create`, post);
export const updatePost = (postId, post) => API.patch(`/posts/${postId}`, post);
export const deletePost = (postId) => API.delete(`/posts/${postId}`);

// Comments
export const getComments = () => API.get(`/comments`);
export const getCommentById = (commentId) => API.get(`/comments/${commentId}`);
export const getCommentsByUserId = (userId) => API.get(`/comments/users/${userId}`);
export const getCommentsByPostId = (postId) => API.get(`/comments/posts/${postId}`);
export const postComment = (comment) => API.post(`/comments/create`, comment);
export const updateComment = (commentId, comment) => API.patch(`/comments/${commentId}`, comment);
export const deleteComment = (commentId) => API.delete(`/comments/${commentId}`);

// Users
export const signUp = (formData) => API.post(`/users/signup`, formData);
export const googleSignIn = (data) => API.post(`/users/signin/google`, data);
export const getCommunity = (userId) => API.get(`/users/community/${userId}`);
export const updateCommunity = (userId, community) => API.patch(`/users/community/${userId}`, {community});