import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import FoodTable from "./FoodTable";
import foodData from "../data/unitPriceList.json";

describe("The FoodTable component", () => {
  const props = foodData;

  it("renders correctly", () => {
    const tree = renderer.create(<FoodTable {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<FoodTable {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
