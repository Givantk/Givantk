import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
  addPointsLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_POINTS_START:
      return {
        ...state,
        addPointsLoading: true,
      };

    case actionTypes.ADD_POINTS_FINISH:
      return {
        ...state,
        addPointsLoading: action.payload ? false : true,
      };

    default:
      return state;
  }
};
