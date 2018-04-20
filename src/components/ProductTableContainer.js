import { connect } from "react-redux";
import ProductTable from "./ProductTable";
import { updateCart } from "../action-creators/actionCreators";

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  updateCart: (productId, quantity) => {
    dispatch(updateCart(productId, quantity));
  }
});

const ProductTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  ProductTable
);

export default ProductTableContainer;
