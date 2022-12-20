import authReducer from './authSlice'
import productsReducer from './productSlice'
import categoryReducer from './categorySlice'
import colorReducer from './colorSlice'
import messageReducer from './messageSlice'
import cartReducer from './cartSlice'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  categories: categoryReducer,
  colors: colorReducer,
  cart: cartReducer,
  message: messageReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
