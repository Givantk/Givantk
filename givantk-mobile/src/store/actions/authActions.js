import http, { userAPI } from '../../assets/utils/httpService';
import * as actionTypes from './actionTypes';

export const signupUser = (userData, navigation) => (dispatch) => {
  http
    .post(userAPI, userData)
    .then(() => {
      navigation.navigate('Tab');
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
    });
};
