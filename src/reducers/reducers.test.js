/* global describe, expect, it */
import types from "../constants/types";
import { reducer, initialState } from "./reducers";

describe("Reducers", () => {
  it("Should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Is getting product data from file", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.IS_GETTING_PRODUCTS
      };

      const expectedState = {
        ...initialState,
        productData: {
          isGetting: true,
          ...initialState.productData.products
        }
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe("Changing quantity of an item", () => {
    it("should return correct state", () => {
      const action = {
        type: types.UPDATE_QUANTITY,
        id: 1,
        quantity: 3
      };

      const startingState = {
        ...initialState,
        basket: {
          quantityById: { 1: 9, 2: 5 }
        }
      };

      const expectedState = {
        ...initialState,
        basket: {
          ...initialState.basket,
          quantityById: {
            ...initialState.basket.quantityById,
            1: 3
          }
        }
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
