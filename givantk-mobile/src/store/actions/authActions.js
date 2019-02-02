import http, { userAPI } from '../../assets/utils/httpService';
import * as actionTypes from './actionTypes';
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
