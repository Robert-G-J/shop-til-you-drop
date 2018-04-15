import React from "react";
import ProductTableContainer from "./ProductTableContainer";

const Cart = () => (
  <div className="cart__body">
    <header className="header">
      <h1 className="header__title">Shopping Cart</h1>
    </header>
    <ProductTableContainer />
  </div>
);

export default Cart;
