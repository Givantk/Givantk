import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
  getProfileLoading: false,
  makeProfileLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MAKE_PAYMENT_START:
      return {
        ...state,
        makeProfileLoading: true,
      };

    case actionTypes.MAKE_PAYMENT_FINISH:
      return {
        ...state,
        makeProfileLoading: false,
      };

    default:
      return state;
  }
};
