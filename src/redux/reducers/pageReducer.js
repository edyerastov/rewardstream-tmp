import { CHANGE_PAGE } from "../actions";

function pageReducer(state = {}, { type, payload }) {
  switch (type) {
    case CHANGE_PAGE:
      return {
        activePage: state.pages.filter(p => p.name === payload)
      };
    default:
      return state;
  }
}

export default pageReducer;
