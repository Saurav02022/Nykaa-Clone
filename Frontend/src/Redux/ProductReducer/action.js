import * as types from "./actionTypes";
import axios from "axios";

//face
const get_failure_face = () =>({
    type: types.GET_FAILURE_DATA_FACE
})


const get_success_face =(data)=>({
    type:types.GET_SUCCESS_DATA_FACE,
    payload: data
})

const get_request_face = ()=>({
    type : types.GET_REQUEST_DATA_FACE
})

export const getDataface = ()=>(dispatch)=> {
    dispatch(get_request_face)
    axios({
      method: "get",
      baseURL: "https://fair-pear-salmon-suit.cyclic.app",
      url: `/face`,
    })
      .then((res) => {
        console.log("facedata", res);
        dispatch(get_success_face(res.data));
      })
      .catch((err) => {
        dispatch(get_failure_face);
        console.log(err);
      });
  };



  
  //skin

const get_failure_skin = () =>({
  type: types.GET_FAILURE_DATA_SKIN
})


const get_success_skin =(data)=>({
  type:types.GET_SUCCESS_DATA_SKIN,
  payload: data
})

const get_request_skin = ()=>({
  type : types.GET_REQUEST_DATA_SKIN
})

export const getDataskin = ()=>(dispatch) => {
  dispatch(get_request_skin)
  axios({
    method: "get",
    baseURL: "https://fair-pear-salmon-suit.cyclic.app",
    url: `/skin`,
  })
    .then((res) => {
      console.log(res);
      dispatch(get_success_skin(res.data));
    })
    .catch((err) => {
      dispatch(get_failure_skin);
      console.log(err);
    });
};



