/* eslint-disable */

import React from "react";
import ProductTableRow from "./ProductTableRow";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("The shopping cart app", () => {
  let component;
  const mockClick = jest.fn();

  const props = {
    id: 1,
    name: "bumbleclark",
    price: "2.10",
    description: "A scnarfing good time",
    quantity: "0"
  };
  beforeEach(() => {
    component = shallow(<ProductTableRow {...props} />);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ProductTableRow {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't crash", () => {
    expect(component.exists()).toEqual(true);
  });
});
