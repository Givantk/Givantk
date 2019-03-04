import * as actionTypes from './actionTypes';
import http, { serviceAPI } from '../../assets/utils/httpService';

export const getAllServices = (callback) => (dispatch) => {
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
      if (callback) callback();
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
    .post("http://192.168.0.8:5000/api/service", service)
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

export const proposeToService = (serviceId, proposal, callback) => (
  dispatch,
) => {
  dispatch({
    type: actionTypes.PROPOSE_TO_SERVICE_START,
  });

  http
    .post(`${serviceAPI}/propose/${serviceId}`, proposal)
    .then(() => {
      dispatch({
        type: actionTypes.PROPOSE_TO_SERVICE_FINISH,
      });

      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.PROPOSE_TO_SERVICE_FINISH,
      });
    });
};

export const getServiceById = (serviceId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_SERVICE_START,
  });

  http
    .get(`${serviceAPI}/${serviceId}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_SERVICE_FINISH,
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
        type: actionTypes.GET_SERVICE_FINISH,
      });
    });
};

export const acceptServiceProposal = (serviceId, proposalId, callback) => (
  dispatch,
) => {
  dispatch({
    type: actionTypes.ACCEPT_SERVICE_PROPOSAL_START,
  });

  http
    .post(`${serviceAPI}/accept-service-proposal/${serviceId}/${proposalId}`)
    .then(() => {
      dispatch({
        type: actionTypes.ACCEPT_SERVICE_PROPOSAL_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.ACCEPT_SERVICE_PROPOSAL_FINISH,
      });
    });
};

export const bookmarkService = (serviceId, callback) => (dispatch) => {
  http
    .get(`${serviceAPI}/bookmark/${serviceId}`)
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

export const unbookmarkService = (serviceId, callback) => (dispatch) => {
  http
    .get(`${serviceAPI}/unbookmark/${serviceId}`)
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
