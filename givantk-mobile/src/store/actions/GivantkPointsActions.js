import * as actionTypes from './actionTypes';
import http, { pointsAPI } from '../../assets/utils/httpService';

export const addPoints = (points, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_POINTS_START,
  });

  http
    .post(`${pointsAPI}`, points)
    .then((res) => {
      dispatch({
        type: actionTypes.ADD_POINTS_FINISH,
        payload: res.data.success,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err,
      });
      dispatch({
        type: actionTypes.ADD_POINTS_FINISH,
      });
    });
};
