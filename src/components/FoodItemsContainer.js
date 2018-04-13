import { connect } from "react-redux";
import FoodItemList from "./FoodItemList";
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

const FoodItemsContainer = connect(mapStateToProps, mapDispatchToProps)(
  FoodItemList
);

export default FoodItemsContainer;
