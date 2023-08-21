import { authReducer } from "./auth/Reducer";

const { legacy_createStore, applyMiddleware, combineReducers } = require("redux");
const { default: thunk } = require("redux-thunk");

const rootReducers = combineReducers({
    auth: authReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))