import axios from "axios";
import {
  cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
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
