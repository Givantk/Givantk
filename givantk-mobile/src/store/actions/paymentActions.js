import * as actionTypes from './actionTypes';
import http, { paymentAPI } from '../../assets/utils/httpService';

export const makePayment = (payment, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MAKE_PAYMENT_START,
  });

  http
    .post(`${paymentAPI}`, payment)
    .then((req) => {
      dispatch({
        type: actionTypes.MAKE_PAYMENT_FINISH,
        payload: res.data,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MAKE_PAYMENT_FINISH,
      });
    });
};
