
import { ACCESS_CHAT } from "../actions/types";

const initialState = {
  SelectedChat: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACCESS_CHAT:
      return {
        SelectedChat: action.payload,
      };
    default:
      return state;
  }
}
