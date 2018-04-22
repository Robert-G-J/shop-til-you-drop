import React from "react";
import PropTypes from "prop-types";

const ProductTableRow = ({
  id,
  name,
  description,
  price,
  image,
  quantity,
  updateCart
}) => (
  <tr>
    <td className="image bp-tablet">
      <img src={image} alt={name} />
    </td>

    <td className="product">
      {name}
      <p className="description bp-tablet">{description}</p>
    </td>
    <td className="price ">£{price}</td>
    <td className="quantity">
      <input
        required
        className="quantity"
        type="number"
        name="quantity"
        min="0"
        value={quantity}
        onChange={e => updateCart(id, parseInt(e.target.value, 10))}
      />
    </td>
    <td className="total">£{(price * quantity).toFixed(2)}</td>
  </tr>
);

ProductTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  updateCart: PropTypes.func.isRequired
};

ProductTableRow.defaultProps = {
  quantity: 0
};
export default ProductTableRow;
