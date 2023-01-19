import axios from "axios"
import * as types from "./actionTypes"


const signupReq= () => {

    return {
        type:types.USER_SIGNUP_REQUEST
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
        payload:data
    }

}

const loginFailure =() => {

    return {
        type:types.USER_LOGIN_FAILURE
    }

}


export const signup =(payload)=>(dispatch)=> {
    dispatch(signupReq())
    return axios.post("/register",payload)
    .then((res)=>{
       return dispatch({type:types.USER_SIGNUP_SUCCESS,payload:res.data})
        // console.log(res.data)
    }).catch((err)=>{
        dispatch(signupFailure())
        console.log(err)
    })
}

export const login =(payload)=>(dispatch)=> {
    dispatch(loginRequest)
    return axios.post("/login",payload)
    .then((res)=>{
       return dispatch(loginSuccess(res.data))
        // console.log(res)
    }).catch((err)=>{
        dispatch(loginFailure)
        console.log(err)
    })

}



