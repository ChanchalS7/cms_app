import axios from "axios";

// const API_URL = "http://localhost:3001/api";
const API_URL = "https://cms-api-o0cj.onrender.com/api";

export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (data) => axios.post(`${API_URL}/posts`, data);
export const updatePost = (id, data) =>
  axios.put(`${API_URL}/posts/${id}`, data);
export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);

export const fetchPages = () => axios.get(`${API_URL}/pages`);
export const fetchPageById = (id) => axios.get(`${API_URL}/pages/${id}`);
export const createPage = (data) => axios.post(`${API_URL}/pages`, data);
export const updatePage = (id, data) =>
  axios.put(`${API_URL}/pages/${id}`, data);
export const deletePage = (id) => axios.delete(`${API_URL}/pages/${id}`);

export const fetchPlugins = () => axios.get(`${API_URL}/plugins`);
export const createPlugin = (data) => axios.post(`${API_URL}/plugins`, data);
export const updatePlugin = (id, data) =>
  axios.put(`${API_URL}/plugins/${id}`, data);
export const deletePlugin = (id) => axios.delete(`${API_URL}/plugins/${id}`);
