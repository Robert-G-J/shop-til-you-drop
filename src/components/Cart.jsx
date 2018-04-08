import React from "react";
import FoodItemsContainer from "./FoodItemsContainer";

const Cart = () => (
  <div className="cart__body">
    <header className="header">
      <h1 className="header__title">Shopping Cart</h1>
    </header>
    <FoodItemsContainer />
  </div>
);

export default Cart;
