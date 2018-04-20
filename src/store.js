import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cart from "./reducers/cart";
import products from "./reducers/products";

const rootReducer = combineReducers({
  cart,
  products
});

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
