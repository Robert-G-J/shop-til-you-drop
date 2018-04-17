import React from "react";
import ProductTableRow from "./ProductTableRow";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("<ProductTableRow />", () => {
  let component;
  let mockChange;
  const props = {
    id: 1,
    name: "bumblescnark",
    price: "2.10",
    description:
      "A scnarfing good time throughout any passive aggressive encounter",
    quantity: 1
  };

  beforeEach(() => {
    mockChange = jest.fn();
    component = shallow(
      <ProductTableRow {...props} updateQuantity={mockChange} />
    );
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(<ProductTableRow {...props} updateQuantity={mockChange} />)
      .toJSON();
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
      expect(component.find(".input-quantity").length).toEqual(1);
    });
    xit("should call a click handler onChange", () => {
      component.find(".input-quantity").simulate("change");
      expect(mockChange).toHaveBeenCalled();
      // TODO: fix test- event is undefined in <input/> onChange. Mounting makes enzyme wrap the <tr/> in a div, also raising an error
    });
  });
});
