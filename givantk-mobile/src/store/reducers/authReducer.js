import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
  setCurrentUserLoading: false,
  signupLoading: false,
  loginWithFacebookLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {




    case actionTypes.LOGIN_USER_START:
      return {
        ...state,
        setCurrentUserLoading: true,
      };

    case actionTypes.LOGIN_USER_WITH_FACEBOOK_START:
      return {
        ...state,
        loginWithFacebookLoading: true,
      };

    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        setCurrentUserLoading: false,
        loginWithFacebookLoading: false,
      };

    case actionTypes.UNSET_CURRENT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        setCurrentUserLoading: false,
        loginWithFacebookLoading: false,
      };

    case actionTypes.SIGN_UP_START:
      return {
        ...state,
        signupLoading: true,
      };

    case actionTypes.SIGN_UP_END:
      return {
        ...state,
        signupLoading: false,
      };
    default:
      return state;
  }
};
