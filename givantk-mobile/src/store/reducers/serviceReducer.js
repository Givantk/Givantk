import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allServices: [],
  selectedService: [],

  getAllServicesLoading: false,
  createServiceLoading: false,
  proposeToServiceLoading: false,
  getServiceLoading: false,
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

    case actionTypes.CREATE_SERVICE_START:
      return {
        ...state,
        createServiceLoading: true,
      };

    case actionTypes.CREATE_SERVICE_FINISH:
      return {
        ...state,
        createServiceLoading: false,
      };

    case actionTypes.PROPOSE_TO_SERVICE_START:
      return {
        ...state,
        proposeToServiceLoading: true,
      };

    case actionTypes.PROPOSE_TO_SERVICE_FINISH:
      return {
        ...state,
        proposeToServiceLoading: false,
      };

    case actionTypes.GET_SERVICE_START:
      return {
        ...state,
        getServiceLoading: true,
      };

    case actionTypes.GET_SERVICE_FINISH:
      return {
        ...state,
        getServiceLoading: false,
        selectedService: action.payload
          ? action.payload
          : [...state.selectedService],
      };

    default:
      return state;
  }
};
