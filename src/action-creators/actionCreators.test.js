import * as actions from "./actionCreators";
import types from "../constants/types";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Shopping cart action creators", () => {
  describe("Updating the cart", () => {
    let productId, quantity, products, expectedAction;
    beforeEach(() => {
      productId = 1;
      quantity = 3;
      products = [
        { id: 1, name: "jones", price: "1.99" }
      ]
      expectedAction = {
        type: types.UPDATE_QUANTITY,
        productId: productId,
        quantity: quantity,
        products: products
      };
    })

    it("has an action creator to updateQuantity", () => {
      const productId = 1;
      const quantity = 3;
      const products = [
        { id: 1, name: "jones", price: "1.99" }
      ]
      const expectedAction = {
        type: types.UPDATE_QUANTITY,
        productId: productId,
        quantity: quantity,
        products: products
      };
      expect(actions.updateQuantity(productId, quantity, products)).toEqual(expectedAction);
    });
    it('dispatches updateQuantity when called', () => {
      const store = mockStore({});
      const expectedActions = { type: types.UPDATE_QUANTITY, }


    })
  });
});
