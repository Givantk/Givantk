import * as actionTypes from './actionTypes';
import http, { IntroAPI } from '../../assets/utils/httpService';

export const passIntro = (currentUser,callback) => (dispatch) => {
  dispatch({
    type: actionTypes.PASS_INTRO_START,
  });

  http
    .post(`${IntroAPI}`,currentUser)
    .then((res) => {
      dispatch({
        type: actionTypes.PASS_INTRO_FINISH,
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
        type: actionTypes.PASS_INTRO_FINISH,
      });
    });
};
