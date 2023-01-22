import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionType";

const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: payload,
  };
};

const signupFailure = (payload) => {
  return {
    type: SIGNUP_FAILURE,
    payload: payload,
  };
};

export const Signup = (data) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    await axios
      .post(`https://fair-pear-salmon-suit.cyclic.app/users/register`, data)
      .then((res) => dispatch(signupSuccess(res.data)));
  } catch (e) {
    dispatch(signupFailure(e.message));
  }
};

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  };
};

const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload: payload,
  };
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    await axios
      .post("https://fair-pear-salmon-suit.cyclic.app/users/login", data)
      .then((res) => dispatch(loginSuccess(res.data)));
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};

