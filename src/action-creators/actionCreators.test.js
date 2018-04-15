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
    it("by incrementing", () => {
      const expectedAction = {
        type: types.INCREMENT_QUANTITY
      };
      expect(actions.incrementQuantity).toEqual(expectedAction);
    });
  });
});
