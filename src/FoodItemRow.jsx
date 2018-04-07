import React from "react";

const FoodItemRow = () => (
  <div className="food-item-row">
    <div className="food-item-row__item" />
    <div className="food-item-row__price" />
    <button className="button-increment">+</button>
    <button className="button-decrement">-</button>
    <div className="food-item-row__quantity" />
    <div className="food-item-row__subtotal" />
  </div>
);

export default FoodItemRow;
