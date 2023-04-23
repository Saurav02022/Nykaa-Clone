import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionType";

export const Signup = (data) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    await axios
      .post(`https://fair-pear-salmon-suit.cyclic.app/users/register`, data)
      .then((res) =>
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data.message })
      );
  } catch (e) {
    dispatch({ type: SIGNUP_FAILURE, payload: e.message });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    await axios
      .post("https://fair-pear-salmon-suit.cyclic.app/users/login", data)
      .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }));
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE, payload: e.message });
  }
};
