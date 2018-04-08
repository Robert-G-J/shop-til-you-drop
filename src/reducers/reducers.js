import types from "../constants/types";
import foodData from "../data/unitPriceList.json";

export const initialState = {
  foodData: {
    isGetting: false,
    foods: [...foodData.foods]
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

    default:
      return state;
  }
};

export default reducer;
