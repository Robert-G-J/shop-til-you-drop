import React from "react";
import PropTypes from "prop-types";

const ProductTableRow = ({
  id,
  name,
  description,
  price,
  updateQuantity,
  quantity
}) => (
  <tr>
    <td className="id">{id}</td>
    <td className="product">
      {name}
      <p className="description">{description}</p>
    </td>
    <td className="price ">£{price}</td>
    <td className="quantity">
      <input
        className="input-quantity"
        type="number"
        name="quantity"
        min="1"
        defaultValue="0"
        value={quantity}
        onChange={e =>
          updateQuantity({ id: id, quantity: parseInt(e.target.value, 10) })
        }
      />
    </td>
    <td className="total">0</td>
  </tr>
);

ProductTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number
};

export default ProductTableRow;
