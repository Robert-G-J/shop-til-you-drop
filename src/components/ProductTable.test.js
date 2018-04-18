import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ProductTable from "./ProductTable";
import { stubPropsForProductTable as stubProps } from "../constants/testHelpers";

describe("<ProductTable />", () => {
  let component;
  const mockChange = jest.fn();
  const mockTotal = jest.fn();

  beforeEach(() => {
    component = shallow(
      <ProductTable {...stubProps} updateQuantity={mockChange} />
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<ProductTable {...stubProps} updateQuantity={mockChange} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    expect(component.exists()).toEqual(true);
  });
});
