/* eslint-disable, global document */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Cart";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Provider store={store}>
    <Cart />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
