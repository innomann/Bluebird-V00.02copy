import axios from "axios";
import {  GET_ARTICLES } from "./actionType";


export const getPosts = (dispatch) => {
  axios
    .get(`http://localhost:5000/api/posts`)
    .then((res) => {
        dispatch({
          type: GET_ARTICLES,
          payload: res.data,
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postService = (formData) => {
  console.log(formData)
  
   
  axios
    .post("http://localhost:5000/api/posts/postimage",formData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
