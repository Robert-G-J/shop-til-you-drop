import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ProductTable from "./ProductTable";
import productData from "../data/unitPriceList.json";

describe("<ProductTable />", () => {
  const props = productData;
  let component;

  beforeEach(() => {
    component = shallow(<ProductTable {...props} />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ProductTable {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const component = shallow(<ProductTable {...props} />);
    expect(component.exists()).toEqual(true);
  });
});
