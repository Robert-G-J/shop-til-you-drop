import types from "../constants/types";
import productData from "../data/unitPriceList.json";

export const initialState = {
  productData: {
    isGetting: false,
    products: [...productData.products]
  },
  basket: {
    items: {},
    currency: "GBP",
    total: 0.0
  }
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
          items: {
            ...state.basket.items,
            ...idQuantity
          }
        }
      };

    default:
      return state;
  }
};

export default reducer;
