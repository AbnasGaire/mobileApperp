import {AttendanceAction} from '../../actions';

const initialState = {
  attendance:[],
};

const AttendanceReducer = (state = initialState, action) => {
  console.log(AttendanceAction.types.SET_ATTENDANCE);
  switch (action.type) {
    case AttendanceAction.types.SET_ATTENDANCE:
      console.log(action.payload,"aaali");
      return {attendance:action.payload};
    default:
      return state;
  }
};

export default AttendanceReducer;