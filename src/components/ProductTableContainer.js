import { connect } from "react-redux";
import ProductTable from "./ProductTable";
import { incrementQuantity } from "../action-creators/actionCreators";

const mapStateToProps = state => ({
  products: state.Reducers.productData.products,
  basket: state.Reducers.basket
});

const mapDispatchToProps = dispatch => ({
  incrementQuantity: () => {
    dispatch(incrementQuantity());
  }
});

const ProductTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  ProductTable
);

export default ProductTableContainer;
