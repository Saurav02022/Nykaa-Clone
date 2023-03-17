import axios from "axios";
import { AddressLoading, AddressSuccess, AddressFailure } from "./actionType";

export const AddAddress = (userid, data) => async (dispatch) => {
  try {
    dispatch({ type: AddressLoading });
    await axios
      .post(`https://fair-pear-salmon-suit.cyclic.app/address/${userid}`, data)
      .then((res) => dispatch({ type: AddressSuccess, payload: res.data }));
  } catch (err) {
    dispatch({ type: AddressFailure });
  }
};

export const getAddress = (userid) => async (dispatch) => {
  try {
    dispatch({ type: AddressLoading });
    await axios
      .get(`https://fair-pear-salmon-suit.cyclic.app/address/${userid}`)
      .then((res) => dispatch({ type: AddressSuccess, payload: res.data }));
  } catch (err) {
    dispatch({ type: AddressFailure });
  }
};
