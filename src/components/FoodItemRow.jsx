import React from "react";
import PropTypes from "prop-types";
import { capitalizeString } from "../helpers";

const FoodItemRow = props => (
  <div className="table-row">
    <div className="table-row__text">{capitalizeString(props.type)}</div>
    <div className="table-row__text">£{props.price}</div>
    <div className="table-row__text">per {props.unit}</div>
    <div className="table-row__button">
      <button className="button-increment">+</button>
    </div>
    <div className="table-row__button">
      <button className="button-decrement">-</button>
    </div>
    <div className="table-row__quantity table-row__text">0</div>
    <div className="table-row__subtotal table-row__text">0</div>
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
