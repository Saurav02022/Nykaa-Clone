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

let initialState = {
  loading: false,
  data: [],
  error: false,
  Totalprice: 0,
  Totaldiscountprice: 0,
  ItemCount: 0,
  deletemsg: "",
  addBagLoading: false,
  addBagSuccess: "",
  addBagError: "",
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
    case addToBagLoading: {
      return {
        ...state,
        addBagLoading: true,
      };
    }
    case addToBagSuccess: {
      return {
        ...state,
        addBagSuccess: payload,
        addBagLoading: false,
      };
    }
    case addToBagError: {
      return {
        ...state,
        addBagError: payload,
      };
    }
    default:
      return state;
  }
};
