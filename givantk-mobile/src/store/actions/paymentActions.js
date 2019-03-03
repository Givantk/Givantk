import * as actionTypes from './actionTypes';
import http, { paymentAPI } from '../../assets/utils/httpService';

export const makePayment = (token, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MAKE_PAYMENT_START,
  });

    console.log('I am')
    console.log(token)
    console.log(paymentAPI)
    http
    .post(`${paymentAPI}`, token)
    .then((req) => {
        console.log('successfully sent')
      dispatch({
        type: actionTypes.MAKE_PAYMENT_START,
      });
      if (callback) callback();
    })
    .catch((err) => {
      console.log('fucking error')
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MAKE_PAYMENT_FINISH,
      });
    });
};
