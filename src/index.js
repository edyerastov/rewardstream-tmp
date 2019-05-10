import React from "react";
import ReactDOM from "react-dom";
import RewardStream from "./components/RewardStream";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <RewardStream />
  </Provider>,
  document.getElementById("root")
);
