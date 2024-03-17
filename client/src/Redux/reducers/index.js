import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleReducer from "./articleReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
  errorState: errorReducer,
});

export default rootReducer;
