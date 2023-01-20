import axios from "axios"
import * as types from "./actionType"


const signupReq= () => {

    return {
        type:types.USER_SIGNUP_REQUEST
    }


}

const signupSuccess = (payload)=>{
    return {
        type: types.USER_SIGNUP_SUCCESS,
        payload: payload
    }
}

const signupFailure= () => {

    return {
        type:types.USER_SIGNUP_FAILURE
    }

}

const loginRequest =() => {

    return {
        type:types.USER_LOGIN_REQUEST
    }

}

const loginSuccess =(payload) => {

    return {
        type:types.USER_LOGIN_SUCCESS,
        payload:payload
    }

}

const loginFailure =() => {

    return {
        type:types.USER_LOGIN_FAILURE
    }

}


export const postdata = ({email, name, password, phone}) => (dispatch) => {
    
    let data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
     
    };
    console.log("params", data);
    dispatch(signupReq());
    
    return axios.post(
        `https://fair-pear-salmon-suit.cyclic.app/users/register`, data
      )
      .then((res) => {
        console.log(res.data);
       dispatch(signupSuccess(res.data));
      })
      .catch((error) => {
        dispatch(signupFailure());
      });
  };

export const login =({email, password})=>(dispatch)=> {
    dispatch(loginRequest)
    const data = {
        email: email,
        password: password
    }
    console.log(data);
    return axios.post("https://fair-pear-salmon-suit.cyclic.app/users/login", data)
    .then((r)=>{
        console.log(r.data);
        return dispatch(loginSuccess(r.data.token))
    })
    .catch((e)=>(
        dispatch(loginFailure())
    ))

}


