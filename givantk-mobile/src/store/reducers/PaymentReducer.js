import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
 
  success:false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MAKE_PAYMENT_START:
      return {
        ...state,
        success: false,
      };

    case actionTypes.MAKE_PAYMENT_FINISH:
      return {
        ...state,
        success: true,
      };

    default:
      return state;
  }
};
