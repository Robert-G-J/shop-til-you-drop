import types from "../constants/types";
import productData from "../data/unitPriceList.json";

export const initialState = {
  productData: {
    isGetting: false,
    products: [...productData.products]
  },
  basket: {
    items: [],
    currency: "GBP",
    total: "0.00"
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
      return {
        ...state,
        basket: {
          ...state.basket,
          items: [
            ...state.basket.items,
            {
              id: action.id,
              quantity: action.quantity
            }
          ]
        }
      };

    default:
      return state;
  }
};

export default reducer;
