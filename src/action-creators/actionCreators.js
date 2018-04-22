import types from "../constants/types";

export const updateQuantity = (productId, quantity, products) => ({
  type: types.UPDATE_QUANTITY,
  productId,
  quantity,
  products
});

export const updateCart = (productId, quantity = 0) => (dispatch, getState) => {
  const validatedQuantity = isNaN(quantity) || quantity < 0 ? 0 : quantity;
  const { products } = getState();
  dispatch(updateQuantity(productId, validatedQuantity, products));
};
