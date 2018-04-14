import React from "react";
import PropTypes from "prop-types";
import FoodTableRow from "./FoodTableRow";

const FoodTable = ({ foods, basket }) => (
  <table className="food-table">
    <thead>
      <tr className="table-row header">
        <th className="table-cell header">Product</th>
        <th className="table-cell header">Price</th>
        <th className="table-cell header">Unit</th>
        <th className="table-cell header add">Add</th>
        <th className="table-cell header remove">Remove</th>
        <th className="table-cell header">Quantity</th>
        <th className="table-cell header">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {foods.map(food => (
        <FoodTableRow
          key={`${food.id}+${Date.now()}`}
          id={food.id}
          name={food.name}
          price={food.price}
          unit={food.unit}
        />
      ))}
    </tbody>
  </table>
);

FoodTable.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired
    })
  ),
  basket: PropTypes.arrayOf(PropTypes.shape({}))
};
export default FoodTable;
