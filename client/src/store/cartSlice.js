import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  entities: localStorage.getItem('entities')
    ? JSON.parse(localStorage.getItem('entities'))
    : [],
  quantity: localStorage.getItem('quantity')
    ? JSON.parse(localStorage.getItem('quantity'))
    : 0,
  total: localStorage.getItem('total')
    ? JSON.parse(localStorage.getItem('total'))
    : 0,
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addFastToCart(state, action) {
      const itemIndex = state.entities.findIndex(
        (item) => item._id === action.payload._id
      )
      if (itemIndex >= 0) {
        state.entities[itemIndex].cartQuantity += 1
        toast.info(`${state.entities[itemIndex].name} cart quantity`, {
          position: 'bottom-left'
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.entities.push(tempProduct)
        toast.success(`${action.payload.name} added to cart`, {
          position: 'bottom-left'
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.entities))
    },
    addProduct: (state, action) => {
      console.log('action price', action.payload.price)
      console.log('action quantity', action.payload.quantity)
      state.quantity += 1
      state.entities.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
      localStorage.setItem('entities', JSON.stringify(state.entities))
      localStorage.setItem('quantity', JSON.stringify(state.quantity))
      localStorage.setItem('total', JSON.stringify(state.total))
    }
  }
})

export const { reducer: cartReducer, actions } = cartSlice

export const { addFastToCart, addProduct } = actions

export const cartItemsSelector = () => (state) => state.cart.entities
export const cartQuantitySelector = () => (state) => state.cart.quantity

export default cartReducer
