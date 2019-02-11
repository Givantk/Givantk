import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  hasProfile: false,
  currentUserProfile: null,
  selectedProfile: null,

  getCurrentProfileLoading: false,
  getProfileLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_PROFILE_START:
      return {
        ...state,
        getCurrentProfileLoading: true,
      };

    case actionTypes.GET_CURRENT_PROFILE_FINISH:
      return {
        ...state,
        getCurrentProfileLoading: false,
        currentUserProfile: action.payload.success
          ? action.payload.profile
          : [...state.currentUserProfile],
        hasProfile: !!action.payload.success,
      };

    case actionTypes.GET_PROFILE_START:
      return {
        ...state,
        getProfileLoading: true,
      };

    case actionTypes.GET_PROFILE_FINISH:
      return {
        ...state,
        getProfileLoading: false,
        selectedProfile: action.payload,
      };

    default:
      return state;
  }
};
