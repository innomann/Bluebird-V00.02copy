import axios from "axios";
import {
  GET_POSTS,
} from "./types";

export const getPosts = () => (dispatch) => {
  axios
    .get(`https://beta-v0-15-test.vercel.app/posts/`)
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
