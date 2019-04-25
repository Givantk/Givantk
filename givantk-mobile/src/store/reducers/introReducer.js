import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {

    passedIntro:false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PASS_INTRO_FINISH:
      return {
        passedIntro: action.payload,
      };
    default:
      return state;
  }
};
