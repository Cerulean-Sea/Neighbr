import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000/api'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))._tokenResponse.idToken}`;
  }
  return req;
});

export const getPosts = () => API.get(`/posts`);
export const signUp = (formData) => API.post(`/users/signup`, formData);