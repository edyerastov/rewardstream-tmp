import { CHANGE_TAB } from "../actions";

function tabReducer(state = {}, { type, payload }) {
  switch (type) {
    case CHANGE_TAB:
      return payload;
    default:
      return state;
  }
}

export default tabReducer;
