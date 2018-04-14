import React from "react";
import FoodTableContainer from "./FoodTableContainer";

const Cart = () => (
  <div className="cart__body">
    <header className="header">
      <h1 className="header__title">Shopping Cart</h1>
    </header>
    <FoodTableContainer />
  </div>
);

export default Cart;
