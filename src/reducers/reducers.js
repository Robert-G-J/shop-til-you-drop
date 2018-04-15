import types from "../constants/types";
import productData from "../data/unitPriceList.json";

export const initialState = {
  productData: {
    isGetting: false,
    products: [...productData.products]
  },
  basket: {
    items: [{ id: 1, quantity: 3, total: 343.0 }],
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

    case types.INCREMENT_QUANTITY:
      return {
        ...state,
        basket: {
          ...state.basket,
          items: [
            {
              quantity: 1
            }
          ]
        }
      };

    default:
      return state;
  }
};

export default reducer;
