import axios from "axios";
import { GET_QUIZ } from "./actionType";

export const getQuiz = (dispatch) => {
  axios
    .get(`http://localhost:5000/api/getquiz/getquestion`)
    .then((res) => {
      dispatch({
        type: GET_QUIZ,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const quizPost = (formData) => {
 console.log("QuizAct hit",formData);
  axios
    .post("http://localhost:5000/api/quiz/question", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchTenQuestions = (datax) =>{
 console.log("QuizActionHit", datax)
  axios
    .get(`http://localhost:5000/api/getquiz/getquestion`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
 
 

}
