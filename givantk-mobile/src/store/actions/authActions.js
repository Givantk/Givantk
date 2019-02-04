import * as actionTypes from './actionTypes';
import http, { userAPI, setAuthToken } from '../../assets/utils/httpService';
import quickNotification from '../../assets/utils/quickNotification';

export const signupUser = (userData, navigation) => (dispatch) => {
  http
    .post(userAPI, userData)
    .then(() => {
      quickNotification('Successfully Signed Up, Please Login');
      navigation.navigate('Login');
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const loginUser = (userData, navigation) => (dispatch) => {
  http
    .post(`${userAPI}/login`, userData)
    .then((res) => {
      quickNotification('Login Successful');

      // Save token to localStorage

      // Set Authorization header
      setAuthToken(res.data.token);

      // Decode token to get user data

      // Set user in auth reducer

      navigation.replace('Tab');
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
    });
};
