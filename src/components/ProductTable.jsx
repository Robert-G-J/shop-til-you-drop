import React from "react";
import PropTypes from "prop-types";
import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ updateQuantity, products, basket, total }) => (
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
          image={product.image}
          updateQuantity={updateQuantity}
          quantity={basket.quantityById[product.id]}
        />
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td />
        <td />
        <td />
        <td>
          <strong>Grand Total</strong>
        </td>
        <td className="grand-total">
          <strong>£{total}</strong>
        </td>
      </tr>
    </tfoot>
  </table>
);
ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  basket: PropTypes.shape({
    quantityById: PropTypes.object.isRequired,
    currency: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }),
  updateQuantity: PropTypes.func.isRequired,
  total: PropTypes.func
};

export default ProductTable;
