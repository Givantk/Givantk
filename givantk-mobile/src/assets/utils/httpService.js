import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;

export const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common.Authorization = token;
  }
};

export const removeAuthToken = () => {
  // Delete auth header
  delete axios.defaults.headers.common.Authorization;
};

export const serverPath = 'https://givantk-backend.herokuapp.com/';
export const userAPI = 'https://givantk-backend.herokuapp.com/api/user';
export const serviceAPI = 'https://givantk-backend.herokuapp.com/api/service';
export const profileAPI = 'https://givantk-backend.herokuapp.com/api/profile';
