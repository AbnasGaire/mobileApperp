import {LoginAction} from '../../actions/Loginaction/Loginaction';

const initialState = {
  token: '',
};

const Loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginAction.types.GET_TOKEN:
      return {...state, token: action.payload};
    default:
      return state;
  }
};

export default Loginreducer;