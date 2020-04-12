import * as actionTypes from './actionTypes';
import http, { pointsAPI } from '../../assets/utils/httpService';
import { serverErrorMessage } from '../../assets/constants';

export const addPoints = (callback) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_POINTS_START,
  });

  http
    .post(`${pointsAPI}`)
    .then((res) => {
      dispatch({
        type: actionTypes.ADD_POINTS_FINISH,
        payload: res.data,
      });
      if (callback) callback();
    })
    .catch((err) => {
      console.log(err)
      if (err.response)
        dispatch({
          type: actionTypes.SET_ERRORS,
          payload: err.response.data,
        });
      else {
        dispatch({
          type: actionTypes.SET_ERRORS,
          payload: serverErrorMessage,
        });
      }
      dispatch({
        type: actionTypes.ADD_POINTS_FINISH,
      });
    });
};
