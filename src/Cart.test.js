/* eslint-disable */

import React from "react";
import Cart from "./Cart";
import { mount, shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The shopping cart app", () => {
  xit("renders correctly", () => {
    const tree = renderer.create(<Cart />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit("doesn't crash", () => {
    const component = mount(<Cart />);
    expect(component.exists()).toEqual(true);
  });
});
