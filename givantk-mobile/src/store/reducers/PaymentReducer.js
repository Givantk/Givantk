import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
  createPaymentLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MAKE_PAYMENT_START:
      return {
        ...state,
        createPaymentLoading: true,
      };

    case actionTypes.MAKE_PAYMENT_FINISH:
      return {
        ...state,
        createPaymentLoading: action.payload ? false : true,
      };

    default:
      return state;
  }
};
