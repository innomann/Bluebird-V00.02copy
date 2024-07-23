import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import errorReducer from "./errorReducer";
import quizReducer from "./quizReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
  quizState:quizReducer,
  errorState: errorReducer,
});

export default rootReducer;
