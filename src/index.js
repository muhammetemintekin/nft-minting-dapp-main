import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Second from "./second";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import GlobalStyle from "./fonts";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
