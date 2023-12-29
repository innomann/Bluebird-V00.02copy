import { GET_ALLUSERS } from "../actions/types";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case  GET_ALLUSERS:
      return {
        ...state,
        user: {},
        users: [...action.payload],
      };
    default:
      return state;
  }
}
