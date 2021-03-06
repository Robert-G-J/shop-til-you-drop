import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ProductTable from "./ProductTable";
import { stubPropsForProductTable as stubProps } from "../constants/testHelpers";

describe("<ProductTable />", () => {
  let component;
  const mockChange = jest.fn();

  beforeEach(() => {
    component = shallow(
      <ProductTable {...stubProps} updateCart={mockChange} />
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<ProductTable {...stubProps} updateCart={mockChange} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    expect(component.exists()).toEqual(true);
  });
});
