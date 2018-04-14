import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { capitalizeString } from "../helpers";

const FoodTableRow = ({ id, name, unit, price }) => (
  <tr className="table-row">
    <td className="table-cell product">{capitalizeString(name)}</td>
    <td className="table-cell price ">£{price}</td>
    <td className="table-cell unit">per {unit}</td>
    <td className="table-cell add">
      <Button
        variant="fab"
        mini
        color="secondary"
        aria-label="add"
        className="button increment"
        onClick={() => {
          alert("agh");
        }}
      >
        <AddIcon />
      </Button>
    </td>
    <td className="table-cell remove">
      <Button
        variant="fab"
        mini
        color="primary"
        aria-label="remove"
        className="button decrement"
      >
        <RemoveIcon />
      </Button>
    </td>
    <td className="table-cell quantity">0</td>
    <td className="table-cell subtotal">0</td>
  </tr>
);

FoodTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
};

export default FoodTableRow;
