import { authReducer } from "./auth/Reducer";
import { cartReducer } from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";
import { customerProductReducer } from "./product/Reducer";

const { legacy_createStore, applyMiddleware, combineReducers } = require("redux");
const { default: thunk } = require("redux-thunk");

const rootReducers = combineReducers({
    auth: authReducer,
    products: customerProductReducer,
    cart: cartReducer,
    order: orderReducer,
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))