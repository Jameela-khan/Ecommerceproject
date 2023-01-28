import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
// import {ToastContainer, toast } from 'react-toastify';
import { positions, transitions, Provider as AlertProvider } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  // position: positions.BOTTOM_CENTER,
  // transition: transitions.SCALE,
};

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider >
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
