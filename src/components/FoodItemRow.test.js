/* eslint-disable */

import React from "react";
import FoodItemRow from "./FoodItemRow";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("The shopping cart app", () => {
  let component;
  const props = {
    id: 1,
    type: "peas",
    price: "2.10",
    unit: "bag"
  };
  beforeEach(() => {
    component = shallow(<FoodItemRow {...props} />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<FoodItemRow {...props} />).toJSON();
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
