import { 
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  FETCH_USER_PROFILE,
  EDIT_USERNAME
} from '../actions/userAction';

const initialState = {
  userProfile: '',
  loginError: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    case LOGOUT:
      return {
        ...state,
        userProfile: ''
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    case FETCH_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };
    case EDIT_USERNAME:
      const newProfile = state.userProfile ? { ...state.userProfile, userName: action.payload } : { userName: action.payload };
      return {
        ...state,
        userProfile: newProfile
      };
    default:
      return state;
  }
};

export default userReducer;