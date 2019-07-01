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

// export const serverPath = 'http://46.101.170.117/givantk';
 export const serverPath = 'http://192.168.56.1:4800';
export const chatServerPath = 'https://givantk-backend.herokuapp.com';

export const userAPI = `${serverPath}/api/user`;
export const serviceAPI = `${serverPath}/api/service`;
export const profileAPI = `${serverPath}/api/profile`;
export const paymentAPI = `${serverPath}/api/payment`;
export const pointsAPI = `${serverPath}/api/points`;
export const chatAPI = `${chatServerPath}/api/chat`;
export const IntroAPI = `${serverPath}/api/intro`;
