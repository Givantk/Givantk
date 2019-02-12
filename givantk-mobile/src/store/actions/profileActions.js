import * as actionTypes from './actionTypes';
import http, { profileAPI } from '../../assets/utils/httpService';

export const getCurrentUserProfile = (callback) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_CURRENT_PROFILE_START,
  });

  http
    .get(`${profileAPI}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_CURRENT_PROFILE_FINISH,
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
        type: actionTypes.GET_CURRENT_PROFILE_FINISH,
      });
    });
};

export const getProfileByUserId = (userId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PROFILE_START,
  });

  http
    .get(`${profileAPI}/${userId}`)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_PROFILE_FINISH,
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
        type: actionTypes.GET_PROFILE_FINISH,
      });
    });
};

export const makeProfile = (profile, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.MAKE_PROFILE_START,
  });

  http
    .post(`${profileAPI}`, profile)
    .then(() => {
      dispatch({
        type: actionTypes.MAKE_PROFILE_FINISH,
      });
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.MAKE_PROFILE_FINISH,
      });
    });
};
