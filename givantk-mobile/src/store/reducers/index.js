import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import serviceReducer from './serviceReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  service: serviceReducer,
});
