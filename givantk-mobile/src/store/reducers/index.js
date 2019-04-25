import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import serviceReducer from './serviceReducer';
import profileReducer from './profileReducer';
import PaymentReducer from './PaymentReducer';
import chatReducer from './chatReducer';
import pointsReducer from './pointsReducer';
import introReducer from './introReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  service: serviceReducer,
  profile: profileReducer,
  payment: PaymentReducer,
  chat: chatReducer,
  points: pointsReducer,
  intro: introReducer,
});
