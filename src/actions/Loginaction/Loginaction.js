const types = {
  GET_TOKEN:"GET_TOKEN",  
};

const getToken = () => {
    alert("abnas");
    return {
      type: types.GET_TOKEN,
      payload: "abc",
    };
  };

export default {getToken,types};
