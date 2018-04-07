/* eslint-disable */

import React from "react";
import Cart from "./Cart";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The shopping cart app", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Cart />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't crash", () => {
    const component = shallow(<Cart />);
    expect(component.exists()).toEqual(true);
  });
});
