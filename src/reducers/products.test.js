import { products, initialState } from "./products";

describe("Products reducers", () => {
  it("should return the initial state when no action is passed", () => {
    expect(products(undefined, {})).toEqual(initialState);
  });
});
