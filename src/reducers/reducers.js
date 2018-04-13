import types from "../constants/types";
import foodData from "../data/unitPriceList.json";

export const initialState = {
  foodData: {
    isGetting: false,
    foods: [...foodData.foods]
  },
  basket: {
    items: [{ id: 1, quantity: 3, subtotal: 343.0 }],
    currency: "GBP",
    total: "0.00"
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_GETTING_FOOD_ITEMS:
      return {
        ...state,
        foodData: {
          isGetting: true,
          ...state.foodData.foods
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
