import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./rootReducers";

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const initialState = {};

const initializeStore = (preloadedState = initialState) => {
  return createStore(rootReducers, preloadedState, enhancer);
};

export default initializeStore;
