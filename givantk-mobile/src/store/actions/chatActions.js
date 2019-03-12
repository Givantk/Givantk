import * as actionTypes from './actionTypes';
import http, { chatAPI } from '../../assets/utils/httpService';

export const loadUserChats = (userId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_USER_CHATS_START,
  });
  http
    .post(`${chatAPI}/user/${userId}`)
    .then((res) => {
      dispatch({
        type: actionTypes.LOAD_USER_CHATS_FINISH,
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
        type: actionTypes.LOAD_USER_CHATS_FINISH,
      });
    });
};