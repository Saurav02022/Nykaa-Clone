import {
  cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
} from "./actionType";

let initialState = {
  loading: false,
  data: [],
  error: false,
  Totalprice: 0,
  Totaldiscountprice: 0,
  ItemCount: 0,
  deletemsg: "",
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartDataLoading: {
      return {
        ...state,
        loading: true,
      };
    }

    case cartDataSuccess: {
      let beforeDiscoutPrice = 0;
      let Atdiscountprice = 0;
      payload.map(({ price, discountedprice }) => {
        beforeDiscoutPrice += price;
        Atdiscountprice += discountedprice;
      });
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
        ItemCount: payload.length,
        Totalprice: beforeDiscoutPrice,
        Totaldiscountprice: Atdiscountprice,
      };
    }
    case cartDataError: {
      return {
        loading: false,
        data: [],
        error: true,
      };
    }

    case deleteLoading: {
      return {
        ...state,
        loading: true,
      };
    }
    case deleteSuccess: {
      return {
        ...state,
        deletemsg: payload,
      };
    }
    case deleteError: {
      return {
        ...state,
        loading: true,
        error: true,
        deletemsg: "",
      };
    }
    default:
      return state;
  }
};
