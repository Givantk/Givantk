import * as actionTypes from './actionTypes';
import http, { serviceAPI } from '../../assets/utils/httpService';

export const getAllServices = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ALL_SERVICES_START,
  });
  http
    .get(`${serviceAPI}/all`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_ALL_SERVICES_FINISH,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_ALL_SERVICES_FINISH,
      });
    });
};

export const createService = (service, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.CREATE_SERVICE_START,
  });
  http
    .post(serviceAPI, service)
    .then(() => {
      dispatch({
        type: actionTypes.CREATE_SERVICE_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.CREATE_SERVICE_FINISH,
      });
    });
};
