import {LoginAction} from '../../actions';

const initialState = {
  token: '',
  isLogin:false,
  error:[],
  user:{},
};

const Loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginAction.types.LOGOUT:
      return {...state,token: '',isLogin:false,error:[]};
    case LoginAction.types.GET_TOKEN:
      return {token: action.payload.token,isLogin:true,error:[],user:action.payload.user};
    case LoginAction.types.ERROR:
      return {...state,token: "",isLogin:false,error:action.payload};
    default:
      return state;
  }
};

export default Loginreducer;