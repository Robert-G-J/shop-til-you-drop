import * as actions from "./actionCreators";
import types from "../constants/types";

describe("Shopping cart action creators", () => {
  describe("Get product information", () => {
    it("creates an action to indicate fetch", () => {
      const expectedAction = {
        type: types.IS_GETTING_PRODUCTS
      };
      expect(actions.isGettingProducts).toEqual(expectedAction);
    });
  });
  describe("Can change quantity of a product", () => {
    it("on field change", () => {
      const updateWith = {
        id: 1,
        quantity: 3
      };
      const expectedAction = {
        type: types.UPDATE_QUANTITY,
        id: updateWith.id,
        quantity: updateWith.quantity
      };
      expect(actions.updateQuantity(updateWith)).toEqual(expectedAction);
    });
  });
});
