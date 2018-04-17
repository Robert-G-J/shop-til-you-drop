import productData from "../data/unitPriceList.json";

export const stubPropsForProductTable = {
  products: [...productData.products],
  basket: {
    items: { 1: 3, 2: 3 },
    currency: "GBP",
    total: 0.0
  }
};
