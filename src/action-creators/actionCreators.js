import types from "../constants/types";

export const isGettingProducts = {
  type: types.IS_GETTING_PRODUCTS
};

export const updateQuantity = args => ({
  type: types.UPDATE_QUANTITY,
  id: args.id,
  quantity: args.quantity
});
