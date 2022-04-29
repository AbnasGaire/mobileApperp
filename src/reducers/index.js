import {combineReducers} from 'redux';

import Loginreducer from './Loginreducer/Loginreducer';

export default combineReducers({
  loginReducer: Loginreducer,
});