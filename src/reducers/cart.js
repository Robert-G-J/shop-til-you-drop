import _ from "lodash";
import types from "../constants/types";

export const initialState = {
  quantityByProductId: {},
  currency: "GBP",
  total: 0.0
};

export const getTotal = (quantityByProductId, products) => {
  return _.reduce(
    quantityByProductId,
    (acc, quantity, id) => {
      const product = _.find(products, ["id", parseInt(id, 10)]);
      const total = product.price * quantity;
      acc = acc + total;
      return acc;
    },
    0
  );
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_QUANTITY:
      const newState = {
        ...state
      };
      newState.quantityByProductId[action.productId] = action.quantity;
      newState.total = getTotal(state.quantityByProductId, action.products);
      return newState;
    default:
      return state;
  }
};

export default cart;
