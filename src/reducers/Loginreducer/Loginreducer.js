import {LoginAction} from '../../actions';

const initialState = {
  token: '',
  isLogin:false,
  error:[],
};

const Loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginAction.types.LOGOUT:
      return {token: '',isLogin:false,error:[]};
    case LoginAction.types.GET_TOKEN:
      return {token: action.payload.token,isLogin:true,error:[]};
    case LoginAction.types.ERROR:
      return {token: action.payload,isLogin:false,error:action.payload};
    default:
      return state;
  }
};

export default Loginreducer;