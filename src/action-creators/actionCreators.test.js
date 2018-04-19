import * as actions from "./actionCreators";
import types from "../constants/types";

describe("Shopping cart action creators", () => {
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
