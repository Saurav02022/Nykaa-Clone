import { AddressLoading, AddressSuccess, AddressFailure } from "./actionType";

const initialState = {
  loading: false,
  success: "",
  error: false,
  Personaddress: "",
};

export const AddressReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AddressLoading: {
      return {
        ...state,
        loading: true,
      };
    }

    case AddressSuccess: {
      return {
        ...state,
        loading: false,
        success: payload.msg,
        Personaddress: payload.address,
        error: false,
      };
    }
    case AddressFailure: {
      return {
        ...state,
        loading: false,
        success: "",
        error: true,
        Personaddress: "",
      };
    }

    default: {
      return state;
    }
  }
};
