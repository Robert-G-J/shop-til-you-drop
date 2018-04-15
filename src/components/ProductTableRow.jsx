import React from "react";
import PropTypes from "prop-types";

const ProductTableRow = ({ id, name, description, price }) => (
  <tr className="table-row">
    <td className="table-cell id">{id}</td>
    <td className="table-cell product">
      {name}
      <p className="description">{description}</p>
    </td>
    <td className="table-cell price ">£{price}</td>
    <td className="table-cell quantity">
      <input
        className="quantity"
        type="number"
        name="quantity"
        min="1"
        defaultValue="1"
      />
    </td>
    <td className="table-cell total">0</td>
  </tr>
);

ProductTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ProductTableRow;
