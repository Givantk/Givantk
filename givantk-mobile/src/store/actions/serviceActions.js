import * as actionTypes from './actionTypes';
import http, { serviceAPI } from '../../assets/utils/httpService';
import { serverErrorMessage } from '../../assets/constants/index';

export const getAllServices = (callbackOnSuccess, callbackOnFail) => (
  dispatch,
) => {
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
      if (callbackOnSuccess) callbackOnSuccess();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_ALL_SERVICES_FINISH,
      });
      if (callbackOnFail) callbackOnFail();
    });
};

export const getSearchedServices = (searchedKeyword, callback) => (
  dispatch,
) => {
  dispatch({
    type: actionTypes.GET_SEARCHED_SERVICES_START,
  });
  http
    .get(`${serviceAPI}/search/${searchedKeyword}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_SEARCHED_SERVICES_FINISH,
        payload: res.data,
      });
      if (callback) callback();
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.GET_SEARCHED_SERVICES_FINISH,
      });
    });
};

export const createService = (service, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.CREATE_SERVICE_START,
  });

  http
    .post(`${serviceAPI}`, service)
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

export const markServiceAsDone = (serviceId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MARK_SERVICE_DONE_START,
  });

  http
    .post(`${serviceAPI}/mark-as-done/${serviceId}`)
    .then(() => {
      dispatch({
        type: actionTypes.MARK_SERVICE_DONE_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MARK_SERVICE_DONE_FINISH,
      });
    });
};

export const archiveService = (serviceId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.ARCHIVE_SERVICE_START,
  });

  http
    .post(`${serviceAPI}/archive/${serviceId}`)
    .then(() => {
      dispatch({
        type: actionTypes.ARCHIVE_SERVICE_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.ARCHIVE_SERVICE_FINISH,
      });
    });
};
// action that handles new reviews added when a service is finished

export const addReview = (review, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_REVIEW_START,
  });

  http
    .post(`${serviceAPI}/review/${review.serviceId}`, review)
    .then(() => {
      dispatch({
        type: actionTypes.ADD_REVIEW_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response ? err.response.data : serverErrorMessage,
      });
      dispatch({
        type: actionTypes.ADD_REVIEW_FINISH,
      });
    });
};

export const addComment = (comment, serviceId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_COMMENT_START,
  });

  http
    .post(`${serviceAPI}/comment/${serviceId}`, comment)
    .then(() => {
      dispatch({
        type: actionTypes.ADD_COMMENT_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response ? err.response.data : serverErrorMessage,
      });
      dispatch({
        type: actionTypes.ADD_COMMENT_FINISH,
      });
    });
};
