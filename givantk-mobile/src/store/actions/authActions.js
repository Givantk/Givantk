import { AsyncStorage, Alert } from 'react-native';
import { Facebook, Permissions, Notifications } from 'expo';
import jwtDecode from 'jwt-decode';

import * as actionTypes from './actionTypes';

import http, {
  userAPI,
  setAuthToken,
  removeAuthToken,
} from '../../assets/utils/httpService';

import { storedJWTname } from '../../assets/constants';
import QuickNotification from '../../components/commons/UI/QuickNotification/QuickNotification';

export const signupUser = (userData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.SIGN_UP_START,
  });

  http
    .post(userAPI, userData)
    .then(() => {
      if (callback) callback();
      dispatch({
        type: actionTypes.SIGN_UP_END,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.SIGN_UP_END,
      });
    });
};

export const loginUser = (userData, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START,
  });

  http
    .post(`${userAPI}/login`, userData)
    .then((res) => {
      const { token } = res.data;
      QuickNotification('تم تسجيل الدخول بنجاح');

      // Save token to storage
      AsyncStorage.setItem(storedJWTname, token).catch(() => {
        QuickNotification('Could not save your credentials');
      });

      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Set user in auth reducer
      dispatch({
        type: actionTypes.SET_CURRENT_USER,
        payload: decodedToken,
      });

      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
      dispatch({
        type: actionTypes.SET_CURRENT_USER,
      });
    });
};


export const logoutUser = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_USER_START,
  });

  // Delete pushNotificationToken for this user from backend
  http.post(`${userAPI}/remove-push-token`).catch((err) => {
    console.log('Error removing push notification', err);
  });

  // Remove token from storage
  AsyncStorage.removeItem(storedJWTname).catch(() => {
    QuickNotification('Could not remove your saved credentials');
  });

  // Remove Authorization header
  removeAuthToken();

  // Remove user from auth reducer
  dispatch({
    type: actionTypes.UNSET_CURRENT_USER,
  });
};

export const checkSavedUserThenLogin = (callback) => (dispatch) => {
  AsyncStorage.getItem(storedJWTname).then((token) => {
    if (token) {
      // Set Authorization header
      setAuthToken(token);

      // Decode token to get user data
      const decodedToken = jwtDecode(token);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp && decodedToken.exp < currentTime) {
        dispatch(logoutUser());
      } else {
        // Set user
        dispatch({
          type: actionTypes.SET_CURRENT_USER,
          payload: decodedToken,
        });
        if (callback) callback();
      }
    }
  });
};

export const loginUserWithFacebook = (callback) => async (dispatch) => {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '2132958976794441',
      {
        permissions: ['public_profile'],
      },
    );
    if (type === 'success') {
      // Get the user's info using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.type(large)`,
      );
      const fbUserInfo = await response.json();

      const userSignupData = {
        first_name: fbUserInfo.name.split(' ')[0],
        last_name: fbUserInfo.name.split(' ')[1],
        email: fbUserInfo.email,
        avatar: fbUserInfo.picture.data.url,
        isFacebookEntry: true,
        facebookId: fbUserInfo.id,
      };

      dispatch({
        type: actionTypes.LOGIN_USER_WITH_FACEBOOK_START,
      });

      http
        .post(userAPI, userSignupData)
        .then(() => {
          const userLoginData = {
            email: fbUserInfo.email,
            isFacebookEntry: true,
            facebookId: fbUserInfo.id,
          };

          http
            .post(`${userAPI}/login`, userLoginData)
            .then((res) => {
              const { token: loginToken } = res.data;

              // Save toke:loginTokenn to storage
              AsyncStorage.setItem(storedJWTname, loginToken).catch(() => {
                QuickNotification('Could not save your credentials');
              });

              // Set Authorization header
              setAuthToken(loginToken);

              // Decode token to get user data
              const decodedToken = jwtDecode(loginToken);

              // Set user in auth reducer
              dispatch({
                type: actionTypes.SET_CURRENT_USER,
                payload: decodedToken,
              });

              if (callback) callback();
            })
            .catch((err) => {
              dispatch({
                type: actionTypes.SET_ERRORS,
                payload: err.response.data,
              });
              dispatch({
                type: actionTypes.SET_CURRENT_USER,
              });
            });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: actionTypes.SET_ERRORS,
            payload: err.response.data,
          });
          dispatch({
            type: actionTypes.SET_CURRENT_USER,
          });
        });
    } else {
      Alert.alert('Couldn\'t Login Using Facebook');
    }
  } catch ({ message }) {
    Alert.alert(`Facebook Login Error: ${message}`);
  }
};

export const getPushNotificationToken = async (callback) => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  http
    .post(`${userAPI}/set-push-token`, { token })
    .then(() => {
      if (callback) callback();
      console.log('Successfully saved token');
    })
    .catch((err) => {
      console.log('Error saving push notification', err);
    });
};



export const ensureCameraRollPermission = async (callback) => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.CAMERA_ROLL,
  );

  if (existingStatus !== 'granted') {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  if (callback) callback();
};
