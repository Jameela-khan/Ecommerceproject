// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Provider} from "react-redux";
// import store from './store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <Provider store={store()}>
//     <App />
//   </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };

// ReactDOM.render(
//   <Provider store={store}>
//     <AlertProvider template={AlertTemplate} {...options}>
//       <App />
//     </AlertProvider>
//   </Provider>,
//   document.getElementById("root")
// );
// reportWebVitals();
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './store'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
reportWebVitals();
