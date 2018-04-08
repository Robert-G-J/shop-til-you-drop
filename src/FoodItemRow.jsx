import React from "react";
import PropTypes from "prop-types";

const FoodItemRow = props => (
  <div className="food-item-row">
    <div className="food-item-row__item">{props.type}</div>
    <div className="food-item-row__price">£{props.price}</div>
    <div className="food-item-row__unit">per {props.unit}</div>
    <button className="button-increment">+</button>
    <button className="button-decrement">-</button>
    <div className="food-item-row__quantity" />
    <div className="food-item-row__subtotal" />
  </div>
);

FoodItemRow.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired
    })
  )
};

export default FoodItemRow;
