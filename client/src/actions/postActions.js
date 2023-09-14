import axios from "axios";
import {
  GET_POSTS,
} from "./types";

export const getPosts = () => (dispatch) => {
  axios
    .get(`http://localhost:5000/api/posts/`)
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Got hitted", err);
      // dispatch(setErrors(err.response.data));
    });
};
