import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import FoodItemList from "./FoodItemList";
import foodData from "../data/unitPriceList.json";

describe("The FoodItemList component", () => {
  const props = foodData;

  it("renders correctly", () => {
    const tree = renderer.create(<FoodItemList {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<FoodItemList {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
