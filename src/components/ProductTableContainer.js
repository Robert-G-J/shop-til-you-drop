import { connect } from "react-redux";
import ProductTable from "./ProductTable";
import { updateQuantity } from "../action-creators/actionCreators";
import { getTotal } from "../reducers/reducers";

const mapStateToProps = state => ({
  products: state.Reducers.productData.products,
  basket: state.Reducers.basket,
  total: getTotal(state)
});

const mapDispatchToProps = dispatch => ({
  updateQuantity: params => {
    dispatch(updateQuantity(params));
  }
});

const ProductTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  ProductTable
);

export default ProductTableContainer;
