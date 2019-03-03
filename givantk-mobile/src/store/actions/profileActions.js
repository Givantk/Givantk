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

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  http
    .post('http://192.168.0.9:5000/api/profile', profile, config)
    .then((req) => {
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

export const setNotificationsSeen = () => (dispatch) => {
  http.post(`${profileAPI}/set-notifications-seen`).catch((err) => {
    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: err.response.data,
    });
  });
};
