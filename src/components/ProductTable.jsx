import React from "react";
import PropTypes from "prop-types";
import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ updateQuantity, products, basket }) => (
  <table className="product-table">
    <thead>
      <tr className="header">
        <th />
        <th>Price</th>
        <th className="quantity">Quantity</th>
        <th className="total">Total</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <ProductTableRow
          key={`${product.id}+${Date.now()}`}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          updateQuantity={updateQuantity}
          quantity={basket.items[product.id]}
        />
      ))}
    </tbody>
  </table>
);

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ),
  basket: PropTypes.shape({
    items: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }),
  updateQuantity: PropTypes.func.isRequired
};
export default ProductTable;
