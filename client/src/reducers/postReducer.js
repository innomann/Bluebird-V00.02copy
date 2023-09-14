import {
  RESET_POST,
  GET_POSTS,
} from "../actions/types";

const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case GET_POSTS:
      return {
        ...state,
        post: {},
        posts: [...action.payload],
      };
    case RESET_POST:
      return initialState;
    default:
      return state;
  }
}
