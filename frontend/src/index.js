// // import React from "react";
// // import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";

// // ReactDOM.render(
// //   <Provider store={store}>
   
// //       <App />
   
// //   </Provider>,
// //   document.getElementById("root")
// // );

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//     <Provider store={store}>
   
//       <App />
   
//   </Provider>
// );
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from 'react-dom/client';
// import AlertTemplate from "react-alert-template-basic";

// const options = {
//   timeout: 5000,
 
// };
const container = document.getElementById('root');
 const root = createRoot(container); // createRoot(container!) if you use TypeScript
 root.render(
     <Provider store={store} >
   
      <App />
   
   </Provider>
);