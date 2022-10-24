import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";

const initState = {};

const middleware = [thunk];

const store = createStore(
    combineReducers,
    initState,
    applyMiddleware(...middleware)
)

export default store;