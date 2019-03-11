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

export const serverPath = 'http://10.0.0.11:5000/';
export const userAPI = 'http://10.0.0.11:5000/api/user';
export const serviceAPI = 'http://10.0.0.11:5000/api/service';
export const profileAPI = 'http://10.0.0.11:5000/api/profile';
export const paymentAPI = 'http://10.0.0.11:5000/api/payment';
