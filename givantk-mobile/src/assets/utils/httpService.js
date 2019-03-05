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

export const serverPath = 'https://192.168.1.6/';
export const userAPI = 'https://192.168.1.6/api/user';
export const serviceAPI = 'https://192.168.1.6/api/service';
export const profileAPI = 'https://192.168.1.6/api/profile';
export const paymentAPI = 'https://192.168.1.6/api/payment';
