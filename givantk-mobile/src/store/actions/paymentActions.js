import * as actionTypes from './actionTypes';
import http, { paymentAPI } from '../../assets/utils/httpService';

export const makePayment = (payment, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MAKE_PAYMENT_START,
  });

  http
    .post(`${paymentAPI}`, payment)
    .then((res) => {
      dispatch({
        type: actionTypes.MAKE_PAYMENT_FINISH,
        payload: res.data.success,
      });
      if (callback) callback();
    })
    .catch((err) => {
      console.log('I am here2');
      console.log(err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err,
      });
      dispatch({
        type: actionTypes.MAKE_PAYMENT_FINISH,
      });
    });
};
