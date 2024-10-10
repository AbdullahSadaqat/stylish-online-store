import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";
import OrderReducer from "./reducers/OrderReducer";

const combineReducer = combineReducers({
    ProductReducer,
    CartReducer,
    OrderReducer
});

export default combineReducer;