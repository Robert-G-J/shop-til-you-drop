import types from "../constants/types";

export const updateQuantity = args => ({
  type: types.UPDATE_QUANTITY,
  id: args.id,
  quantity: args.quantity
});
