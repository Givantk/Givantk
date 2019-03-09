import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import serviceReducer from './serviceReducer';
import profileReducer from './profileReducer';
import PaymentReducer from './PaymentReducer';
import pointsReducer from './pointsReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  service: serviceReducer,
  profile: profileReducer,
  payment: PaymentReducer,
  points: pointsReducer,
});
