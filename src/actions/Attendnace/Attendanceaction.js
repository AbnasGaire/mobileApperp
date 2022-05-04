const types = {
    SET_ATTENDANCE:"SET_ATTENDANCE",
  };
  
  const setAttendance = (data) => {
       return {
        type: types.SET_ATTENDANCE,
        payload: data,
      }
    };
export default {setAttendance,types};