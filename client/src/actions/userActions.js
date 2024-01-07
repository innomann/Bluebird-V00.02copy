import axios from "axios";
import { GET_ALLUSERS } from "./types";

export const getAllusers = (dispatch)  => {
  console.log("Get all users  Action hitted");
  axios
    .get(`http://localhost:5000/api/users/allUsers`)
    .then((res) => {
      dispatch({
        type: GET_ALLUSERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Got hitted", err);
      // dispatch(setErrors(err.response.data));
    });
};



