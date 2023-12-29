import { combineReducers } from "redux";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";
import accessChatReducer from "./accessChatReducer";

export default combineReducers({
  post: postReducer,
  accesschat: accessChatReducer,
  users: usersReducer,
});
