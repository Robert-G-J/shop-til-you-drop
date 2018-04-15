/* eslint-disable */

import React from "react";
import ProductTableRow from "./ProductTableRow";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("<ProductTableRow />", () => {
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

  it("has product id", () => {
    expect(component.find("td.id").length).toEqual(1);
  });

  it("has product name", () => {
    expect(component.find("td.product").length).toEqual(1);
  });

  it("has product description", () => {
    expect(component.find("td .description").length).toEqual(1);
  });

  it("has product price", () => {
    expect(component.find("td.price").length).toEqual(1);
  });

  it("has product quantity cell", () => {
    expect(component.find("td.quantity").length).toEqual(1);
  });

  describe("<input>", () => {
    it("exists", () => {
      expect(component.find("input.quantity").length).toEqual(1);
    });
  });
});
