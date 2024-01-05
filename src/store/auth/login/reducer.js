import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  RESET_LOGIN_FLAG,
  GET_ME_SUCCESS,
  GET_ME_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD
} from "./actionTypes";

const initialState = {
  errorMsg: "",
  loading: false,
  error: false,
  userInfo: {},
  isloggedIn:false,
  loggedIn:false,
  errorUserinfo:null,
  loadingUserinfo:true,
  isUserLogout: false,
  passwordLoading: false, 
  passwordError: false, 

};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        loggedIn:true,
        error: false,
      };
      break;
    case LOGOUT_USER:
      state = { ...state, isUserLogout: true };
      break;
    case LOGOUT_USER_SUCCESS:
      state = { ...state, isUserLogout: false };
      break;
    case GET_ME_SUCCESS:
        return {
          ...state,
          loadingUserinfo: false,
          userInfo: action.payload,
          isloggedIn:true,
          errorUserinfo: null,
        };
    case GET_ME_FAIL:
          return {
            ...state,
            loadingUserinfo: false,
            errorUserinfo: action.payload,
          };
    case API_ERROR:
      state = {
        ...state,
        errorMsg: action.payload,
        loading: true,
        error: true,
        isUserLogout: false,
      };
      break;
    case RESET_LOGIN_FLAG:
      state = {
        ...state,
        errorMsg: null,
        loading: false,
        error: false,
      };
      break;
      case CHANGE_PASSWORD:
        state = { ...state, passwordLoading: true, passwordError: false };
        break;
      case CHANGE_PASSWORD_FAIL:
        state = {
          ...state,
          passwordLoading: false,
          errorMsg: action.payload,
          passwordError: false,
        };
        break;
      case CHANGE_PASSWORD_SUCCESS:
        state = {
          ...state,
          passwordLoading: false,
          passwordError: false,
        };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
