/* global describe, expect, it */
import types from "../constants/types";
import { cart, initialState, getTotal } from "./cart";

describe("Cart reducers", () => {
  it("should return the initial state when no action is passed", () => {
    expect(cart(undefined, {})).toEqual(initialState);
  });

  describe("Changing quantity of an item", () => {
    it("should return correct state", () => {
      const action = {
        type: types.UPDATE_QUANTITY,
        productId: 1,
        quantity: 3,
        products: [{ id: 1, name: "test", price: 10.0 }]
      };

      const startingState = {
        ...initialState,
        quantityByProductId: {}
      };

      const expectedState = {
        ...initialState,
        quantityByProductId: {
          ...initialState.quantityByProductId,
          1: 3
        },
        total: 30
      };
      expect(cart(startingState, action)).toEqual(expectedState);
    });
  });

  describe("Getting the grand total", () => {
    const products = [{ id: 1, name: "test", price: 10.0 }];
    it("calculates zero when cart is empty", () => {
      const quantityByProductId = {};
      expect(getTotal(quantityByProductId, products)).toEqual(0);
    });
    it("calculates correctly when cart has item", () => {
      const quantityByProductId = { 1: 4 };
      expect(getTotal(quantityByProductId, products)).toEqual(40);
    });
  });
});
