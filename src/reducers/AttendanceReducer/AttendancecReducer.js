import {AttendanceAction} from '../../actions';

const initialState = {
  attendance:[],
};

const AttendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case AttendanceAction.types.SET_ATTENDANCE:
      return {attendance:action.payload.attendance};
    default:
      return state;
  }
};

export default AttendanceReducer;