import * as actions from "./actionCreators";
import types from "../constants/types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Shopping cart action creators", () => {
  describe("Updating the cart", () => {
    let productId, quantity, expectedActions;
    const products = [{ id: 1, name: "jones", price: "1.99" }];
    const initialState = {
      products
    };
    const store = mockStore(initialState);

    beforeEach(() => {
      store.clearActions();
      [productId, quantity] = [1, 3];
      expectedActions = [
        {
          type: types.UPDATE_QUANTITY,
          productId,
          quantity,
          products
        }
      ];
    });

    it("has an action creator to updateQuantity", () => {
      expect(actions.updateQuantity(productId, quantity, products)).toEqual(
        expectedActions[0]
      );
    });

    it("dispatches updateQuantity when called", () => {
      store.dispatch(actions.updateCart(productId, quantity));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it("transforms NaN to 0 for quantity", () => {
      store.dispatch(actions.updateCart(productId, NaN));
      expect(store.getActions()[0].quantity).toEqual(0);
    });
    it("transforms -ve quantity to 0", () => {
      store.dispatch(actions.updateCart(productId, -1));
      const { quantity: storedQuantity } = store.getActions()[0];
      expect(storedQuantity).toEqual(0);
    });
  });
});
