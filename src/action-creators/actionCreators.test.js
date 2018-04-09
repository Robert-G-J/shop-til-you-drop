import * as actions from "./actionCreators";
import types from "../constants/types";

describe("Shopping cart action creators", () => {
  describe("Get food item information", () => {
    it("creates an action to indicate fetch", () => {
      const expectedAction = {
        type: types.IS_GETTING_FOOD_ITEMS
      };
      expect(actions.isGettingFoodItems).toEqual(expectedAction);
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
