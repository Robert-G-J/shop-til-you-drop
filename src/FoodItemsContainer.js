import { connect } from "react-redux";
import FoodItemList from "./FoodItemList";

const mapStateToProps = state => ({
  foods: state.Reducers.foodData.foods
});

const FoodItemsContainer = connect(mapStateToProps)(FoodItemList);

export default FoodItemsContainer;
