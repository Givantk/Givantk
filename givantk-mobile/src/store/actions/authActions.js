import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';

import * as actionTypes from './actionTypes';

import http, {
  userAPI,
  setAuthToken,
  removeAuthToken,
} from '../../assets/utils/httpService';

import storedJWTname from '../../assets/constants/storedJWTname';
import QuickNotification from '../../components/commons/UI/QuickNotification/QuickNotification';

export const signupUser = (userData, callback) => (dispatch) => {
  http
    .post(userAPI, userData)
    .then(() => {
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const loginUser = (userData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START,
  });

  http
    .post(`${userAPI}/login`, userData)
    .then((res) => {
      const { token } = res.data;
      QuickNotification('Login Successful');

      // Save token to storage
      AsyncStorage.setItem(storedJWTname, token).catch(() => {
        QuickNotification('Could not save your credentials');
      });

      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Set user in auth reducer
      dispatch({
        type: actionTypes.SET_CURRENT_USER,
        payload: decodedToken,
      });

      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START,
  });

  // Remove token from storage
  AsyncStorage.removeItem(storedJWTname).catch(() => {
    QuickNotification('Could not remove your saved credentials');
  });

  // Remove Authorization header
  removeAuthToken();

  // Remove user from auth reducer
  dispatch({
    type: actionTypes.UNSET_CURRENT_USER,
  });
};

export const checkSavedUserThenLogin = (callback) => (dispatch) => {
  AsyncStorage.getItem(storedJWTname).then((token) => {
    if (token) {
      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        dispatch(logoutUser());
      } else {
        // Set user
        dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: decodedToken,
        });
        if (callback) callback();
      }
    }
  });
};
