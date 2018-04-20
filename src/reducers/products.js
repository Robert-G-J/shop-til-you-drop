import productData from "../data/unitPriceList.json";

// the products reducer pushes products into state on app load

export const initialState = [...productData.products];

export const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
