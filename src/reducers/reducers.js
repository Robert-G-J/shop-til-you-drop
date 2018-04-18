import types from "../constants/types";
import productData from "../data/unitPriceList.json";

export const initialState = {
  productData: {
    isGetting: false,
    products: [...productData.products]
  },
  basket: {
    quantityById: {},
    currency: "GBP",
    total: 0.0
  }
};

export const getTotal = state => {
  let acc = 0;
  Object.keys(state.Reducers.basket.quantityById).forEach(id => {
    state.Reducers.productData.products.forEach(product => {
      if (product.id == id) {
        acc =
          acc +
          parseFloat(product.price) * state.Reducers.basket.quantityById[id];
      }
    });
  });
  return acc.toFixed(2);
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_GETTING_PRODUCTS:
      return {
        ...state,
        productData: {
          isGetting: true,
          ...state.productData.products
        }
      };

    case types.UPDATE_QUANTITY:
      const idQuantity = {};
      idQuantity[action.id] = action.quantity;

      return {
        ...state,
        basket: {
          ...state.basket,
          quantityById: {
            ...state.basket.quantityById,
            ...idQuantity
          }
        }
      };

    default:
      return state;
  }
};

export default reducer;
