import axios from "axios";
import { GET_ALLUSERS } from "./types";

export const getAllusers = (dispatch) => {
  axios
    .get(`https://beta-v0-15-test.vercel.app/api/users/allUsers`)
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
