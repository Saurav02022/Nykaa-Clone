import axios from "axios";
import {
  cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
  addToBagLoading,
  addToBagSuccess,
  addToBagError,
} from "./actionType";

export const getData = (userid) => async (dispatch) => {
  try {
    dispatch({ type: cartDataLoading });
    await axios
      .get(`https://fair-pear-salmon-suit.cyclic.app/cart/${userid}`)
      .then((res) => {
        dispatch({ type: cartDataSuccess, payload: res.data.cartdata });
      });
  } catch (err) {
    dispatch({ type: cartDataError });
  }
};

export const addToBag = (userid, data) => async (dispatch) => {
  try {
    dispatch({ type: addToBagLoading });
    await axios
      .post(`https://fair-pear-salmon-suit.cyclic.app/cart/${userid}`, data)
      .then((res) => {
        dispatch({ type: addToBagSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: addToBagError, payload: err.message });
  }
};

export const DeleteData = (userid, index) => async (dispatch) => {
  try {
    dispatch({ type: deleteLoading });
    await axios
      .delete(
        `https://fair-pear-salmon-suit.cyclic.app/cart/${userid}/${index}`
      )
      .then((res) => {
        dispatch({ type: deleteSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: deleteError });
  }
};

export const paymentSuccess = (userid) => async (dispatch) => {
  try {
    dispatch({ type: deleteLoading });
    await axios
      .patch(
        `https://fair-pear-salmon-suit.cyclic.app/users/paymentSuccess/${userid}`
      )
      .then((res) => {
        dispatch({ type: deleteSuccess, payload: res.data.message });
      });
  } catch (err) {
    dispatch({ type: deleteError });
  }
};
