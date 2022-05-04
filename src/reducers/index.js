import {combineReducers} from 'redux';

import Loginreducer from './Loginreducer/Loginreducer';
import AttendanceReducer from './AttendanceReducer/AttendancecReducer';

export default combineReducers({
  loginReducer: Loginreducer,
  attendnceReducer: AttendanceReducer,
});