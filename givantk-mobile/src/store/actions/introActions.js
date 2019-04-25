import * as actionTypes from './actionTypes';
import { AsyncStorage } from 'react-native';
import http, { IntroAPI } from '../../assets/utils/httpService';

export const passIntro = (currentUser, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.PASS_INTRO_START,
  });

  http
    .post(`${IntroAPI}`, currentUser)
    .then((res) => {
      AsyncStorage.setItem(
        'passedIntro',
        JSON.stringify({ passedIntro: true })
      ).then(
        AsyncStorage.getItem('passedIntro').then((value) => {
          console.log(JSON.parse(value));
          console.log('I am ');
          console.log(JSON.parse(value).passedIntro);
          dispatch({
            type: actionTypes.PASS_INTRO_FINISH,
            payload: JSON.parse(value).passedIntro,
          });
        })
      );

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

export const getSavedPassedIntro = () => (dispatch) => {
  AsyncStorage.getItem('passedIntro').then((value) => {
    if (value) {
      dispatch({
        type: actionTypes.PASS_INTRO_FINISH,
        payload: JSON.parse(value).passedIntro,
      });
    }
  });
};
