import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/reducers";

const rootReducer = combineReducers({
  reducer
});

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
