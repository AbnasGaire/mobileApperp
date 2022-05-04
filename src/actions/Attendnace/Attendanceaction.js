const types = {
    SET_ATTENDANCE:"SET_ATTENDANCE",
  };
  
  const setAttendance = (data) => {
       return {
        type: types.SET_ATTENDANCE,
        payload: data.attendancesOfEmployee,
      }
    };
export default {setAttendance,types};