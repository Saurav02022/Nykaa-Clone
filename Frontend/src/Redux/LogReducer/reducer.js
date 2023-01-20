import * as types from "./actionType"

const initialState={
    isAuth:false,
    isSignUp: "",
    token:"",
    isAuthError:false,
    isAuthLoading:false
}

const reducer = (state=initialState , action) => {

    const {type,payload} = action;

    switch(type){
        case types.USER_LOGIN_REQUEST:
            return {
                ...state,
                isAuthLoading:true
            };

            case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                token:payload,
                isAuth:true,
                isAuthLoading:false
            };

            case types.USER_LOGIN_FAILURE:
                return {
                    ...state,
                    isAuth: false,
                    isAuthLoading: false,
                    token: "",
                    isAuthError: true,
                };
            case types.USER_SIGNUP_SUCCESS:
                return {
                    ...state,isSignUp:payload,
                }

                default :
                return state ;
    }
}

export {reducer};

