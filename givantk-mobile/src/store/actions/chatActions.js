import * as actionTypes from './actionTypes';
import http, { serviceAPI } from '../../assets/utils/httpService';

export const loadUserChats = (userId, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.LOAD_USER_CHATS_START,
  });
  http
    .get(`http://192.168.1.8:5000/api/chat/user/${userId}`)
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