import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import tabReducer from "./tabReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  logged: loginReducer,
  pages: pageReducer,
  activePage: pageReducer,
  activeTab: tabReducer
});
