import { LOGIN } from "../actions";

function loginReducer(state = {}, { type, payload }) {
  switch (type) {
    case LOGIN:
      return { logged: payload };
    default:
      return state;
  }
}

export default loginReducer;
