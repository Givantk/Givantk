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

export const serverPath = 'http://192.168.43.91:5000/';
export const userAPI = 'http://192.168.43.91:5000/api/user';
export const serviceAPI = 'http://192.168.43.91:5000/api/service';
export const profileAPI = 'http://192.168.43.91:5000/api/profile';
export const paymentAPI = 'http://192.168.43.91:5000/api/payment';
export const pointsAPI = 'http://192.168.43.91:5000/api/points';
