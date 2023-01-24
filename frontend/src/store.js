// import { combineReducers, applyMiddleware} from "redux";
// import {configureStore} from "@reduxjs/toolkit"
//  import thunk from "redux-thunk";

//  import {composeWithDevTools} from "redux-devtools-extension";
//  import {productReducer} from "./reducers/productReducer";

//  const reducer = combineReducers({
//     products: productReducer,
  
// })
//     let initialState = {};

//     const  middleware = [thunk];

//     // const store = configureStore(
//     //     reducer,
//     //     initialState,
//     //     composeWithDevTools(applyMiddleware(...middleware))
        
//     // );

//     const store = () => {
       
//         return configureStore(
//          reducer,
//          initialState,
//          composeWithDevTools(applyMiddleware(...middleware))
//         )
//        }

//     export default store;


import {combineReducers, configureStore} from "@reduxjs/toolkit"
import thunk from "redux-thunk";

import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {productReducer} from "./reducers/productReducer"

const reducer = combineReducers({
    products: productReducer,
})
const sagaMiddleware = createSagaMiddleware();

export default function createStore(initialState = {}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [thunk,sagaMiddleware, routerMiddleware(history)];
    const store= configureStore({
        reducer:reducer
      });
      
    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {}; // Async reducer registry

    return store;
}