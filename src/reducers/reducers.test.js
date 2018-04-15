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

  describe("Changing quantity", () => {
    it("should increment a product by 1", () => {
      const action = {
        type: types.INCREMENT_QUANTITY
      };
      const expectedState = {
        ...initialState,
        basket: {
          ...initialState.basket,
          items: [
            {
              quantity: 1
            }
          ]
        }
      };
      expect(reducer(initialState, action)).toEqual(expectedState);
    });
  });
});
