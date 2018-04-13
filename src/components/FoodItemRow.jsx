import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { capitalizeString } from "../helpers";

const FoodItemRow = ({ type, unit, quantity, price }) => (
  <div className="table-row">
    <div className="table-row__product table-row__text">
      {capitalizeString(type)}
    </div>
    <div className="table-row__price table-row__text">£{price}</div>
    <div className="table-row__unit table-row__text">per {unit}</div>
    <div className="table-row__text">
      <Button
        variant="fab"
        mini
        color="secondary"
        aria-label="add"
        className={`${type} button-increment`}
        onClick={() => {
          alert("agh");
        }}
      >
        <AddIcon />
      </Button>
    </div>
    <div className="table-row__text">
      <Button
        variant="fab"
        mini
        color="primary"
        aria-label="remove"
        className="button-decrement"
      >
        <RemoveIcon />
      </Button>
    </div>
    <div className="table-row__quantity table-row__text">{quantity}</div>
    <div className="table-row__subtotal table-row__text">0</div>
  </div>
);

FoodItemRow.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
};

export default FoodItemRow;
