/* global describe, expect, it */
import types from "../constants/types";
import { reducer, initialState } from "./reducers";

describe("Reducers", () => {
  it("Should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Is getting food data from file", () => {
    it("should return the correct state", () => {
      const action = {
        type: types.IS_GETTING_FOOD_ITEMS
      };

      const expectedState = {
        ...initialState,
        foodData: {
          isGetting: true,
          ...initialState.foodData.foods
        }
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });
});
