import { SET_LOADING_STATUS,  GET_QUIZ } from "../actions/actionType";

export const initState = {
  questions: [{}],
  loading: false,
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    // articles case
    case GET_QUIZ:
      // so it return the article existing state along with payloads
      return {
        ...state,
        questions: action.payload,
      };
    // loading case
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default quizReducer;
