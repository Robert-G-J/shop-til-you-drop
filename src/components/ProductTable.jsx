import React from "react";
import PropTypes from "prop-types";
import ProductTableRow from "./ProductTableRow";

const ProductTable = ({ updateQuantity, products, basket }) => (
  <table className="product-table">
    <thead>
      <tr className="table-row header">
        <th className="table-cell header" />
        <th className="table-cell header">Price</th>
        <th className="table-cell header quantity">Quantity</th>
        <th className="table-cell header total">Total</th>
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
      price: PropTypes.string.isRequired,
      updateQuantity: PropTypes.func.isRequired
    })
  ),
  basket: PropTypes.arrayOf(PropTypes.shape({}))
};
export default ProductTable;
