/* eslint-disable */

import React from "react";
import Cart from "./Cart";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

describe("The shopping cart app", () => {
  const store = configureStore([thunk])();

  it("doesn't crash", () => {
    const wrapper = shallow(<Cart store={store} />);
    expect(wrapper.exists()).toEqual(true);
  });
});
