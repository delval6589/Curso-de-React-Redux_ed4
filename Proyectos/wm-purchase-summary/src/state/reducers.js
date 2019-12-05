import { combineReducers } from "redux";
import cart from "./cart/cart-reducers";
import discount from "./discount/discount-reducers";

const reducers = combineReducers({ cart, discount });

export default reducers;