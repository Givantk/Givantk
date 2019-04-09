import * as actionTypes from '../actions/actionTypes';
const INITIAL_STATE = {
  addPointsLoading: false,
  pointsValue:0,
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
        addPointsLoading: action.payload.success ? false : true,
        pointsValue: action.payload.value,
      };

    default:
      return state;
  }
};
