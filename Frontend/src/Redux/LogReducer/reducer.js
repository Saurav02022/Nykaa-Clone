import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET,
  Logout,
} from "./actionType";

const initialState = {
  isAuth: false,
  signupLoading: false,
  signupSuccess: "",
  signupError: "",
  loginLoading: false,
  loginSuccess: "",
  loginError: "",
  token: "",
  userid: "",
};

const AuthenticationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupSuccess: payload,
        signupLoading: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isAuth: false,
        signupLoading: false,
        signupSuccess: "",
        signupError: payload,
      };
    case RESET: {
      return {
        isAuth: false,
        signupLoading: false,
        signupSuccess: "",
        signupError: "",
        loginLoading: false,
        loginSuccess: "",
        loginError: "",
        token: "",
        userid: "",
      };
    }
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        loginLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loginSuccess: payload.message,
        loginLoading: false,
        token: payload.token,
        userid: payload.userId,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        loginLoading: false,
        loginSuccess: "",
        loginError: payload,
        token: "",
        userid: "",
      };
    case Logout: {
      return {
        ...state,
        isAuth: false,
        signupLoading: false,
        signupSuccess: "",
        signupError: "",
        loginLoading: false,
        loginSuccess: "",
        loginError: "",
        token: "",
        userid: "",
      };
    }

    default:
      return state;
  }
};

export { AuthenticationReducer };
