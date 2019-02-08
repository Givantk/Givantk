import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allServices: [],
  getAllServicesLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SERVICES_START:
      return {
        ...state,
        getAllServicesLoading: true,
      };

    case actionTypes.GET_ALL_SERVICES_FINISH:
      return {
        ...state,
        getAllServicesLoading: false,
        allServices: action.payload ? action.payload : [...state.allServices],
      };

    default:
      return state;
  }
};
