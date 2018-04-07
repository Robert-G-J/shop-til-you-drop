/* eslint-disable */

import React from "react";
import FoodItemRow from "./FoodItemRow";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The shopping cart app", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FoodItemRow />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<FoodItemRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't crash", () => {
    expect(component.exists()).toEqual(true);
  });

  describe("has buttons", () => {
    it("to increment", () => {
      expect(component.find(".button-increment").length).toEqual(1);
    });

    it("to decrement", () => {
      expect(component.find(".button-decrement").length).toEqual(1);
    });
  });
});
