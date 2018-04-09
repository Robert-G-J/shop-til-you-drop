import React from "react";
import PropTypes from "prop-types";
import FoodItemRow from "./FoodItemRow";

const FoodItemList = ({ foods }) => (
  <div className="product-table">
    <div className="table-row header">
      <div className="table-row__text">Product</div>
      <div className="table-row__text">Price</div>
      <div className="table-row__text">Unit</div>
      <div className="table-row__text">Add</div>
      <div className="table-row__text">Remove</div>
      <div className="table-row__text">Quantity</div>
      <div className="table-row__text">Subtotal</div>
    </div>

    <ul>
      {foods.map(food => (
        <li className="product-row__element" key={food.id}>
          <FoodItemRow type={food.type} price={food.price} unit={food.unit} />
        </li>
      ))}
    </ul>
  </div>
);

FoodItemList.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired
    })
  )
};
export default FoodItemList;
