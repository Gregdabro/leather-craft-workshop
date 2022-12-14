import authReducer from "./authSlice";
import productsReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import colorReducer from "./colorSlice";
import messageReducer from "./messageSlice";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    categories: categoryReducer,
    colors: colorReducer,
    message: messageReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}