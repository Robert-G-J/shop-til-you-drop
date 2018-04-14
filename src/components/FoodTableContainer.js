import { connect } from "react-redux";
import FoodTable from "./FoodTable";
import { incrementQuantity } from "../action-creators/actionCreators";

const mapStateToProps = state => ({
  foods: state.Reducers.foodData.foods,
  basket: state.Reducers.basket
});

const mapDispatchToProps = dispatch => ({
  incrementQuantity: () => {
    dispatch(incrementQuantity());
  }
});

const FoodTableContainer = connect(mapStateToProps, mapDispatchToProps)(
  FoodTable
);

export default FoodTableContainer;
