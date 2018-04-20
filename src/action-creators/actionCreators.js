import types from "../constants/types";

export const updateQuantity = (productId, quantity, products) => ({
  type: types.UPDATE_QUANTITY,
  productId,
  quantity,
  products
});

export const updateCart = (productId, quantity) => (dispatch, getState) => {
  const products = getState().products;
  dispatch(updateQuantity(productId, quantity, products));
};
