import React from "react";
import PropTypes from "prop-types";
import FoodItemRow from "./FoodItemRow";

const FoodItemList = ({ foods }) => (
  <div className="food-item-table">
    <ul className="food-item__list">
      {foods.map(food => (
        <li className="food-item-list__element" key={food.id}>
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
