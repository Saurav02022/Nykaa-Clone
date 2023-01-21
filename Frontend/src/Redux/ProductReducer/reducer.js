import * as types from "./actionType";

const initialize = {
  face:[],
  skin:[],
  cart:[],
  liked:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialize, action) => {
  const { payload, type } = action;

  switch (type) {
    //get data
    case types.GET_FAILURE_DATA_FACE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
       
      };
    }
    case types.GET_REQUEST_DATA_FACE: {
      return {
        ...state,
        isLoading: true,
        isError: false,
       
      };
    }
    case types.GET_SUCCESS_DATA_FACE: {
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        face: payload,
      };
    }
  //beauty 
  case types.GET_FAILURE_DATA_SKIN: {
    return {
      ...state,
      isLoading: false,
      isError: true,
      skin: [],
    };
  }
  case types.GET_REQUEST_DATA_SKIN: {
    return {
      ...state,
      isLoading: true,
      isError: false,
      skin: [],
    };
  }
  case types.GET_SUCCESS_DATA_SKIN: {
    // console.log(payload);
    return {
      ...state,
      isLoading: false,
      isError: false,
      skin: payload,
    };
  }
    default: {
        return state
    }
  }
};


// update the redux and connect with frontend 