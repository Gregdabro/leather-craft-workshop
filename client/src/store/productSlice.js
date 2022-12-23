import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from '../services/product.service'
import { setMessage } from './messageSlice'
import { signup } from './authSlice'
export const getProducts = createAsyncThunk(
  'products/get',
  async (_, thunkAPI) => {
    try {
      const response = await productService.get()
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ image, name, description, category, price, colors }, thunkAPI) => {
    try {
      const response = await productService.create({
        image,
        name,
        description,
        category,
        price,
        colors
      })
      return response.data
    } catch (e) {
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

const initialState = {
  entities: [],
  loading: false
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.entities = action.payload
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false
    },
    [addProduct.pending]: (state) => {
      state.loading = true
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false
      state.entities.push(action.payload)
    },
    [addProduct.rejected]: (state) => {
      state.loading = false
    }
  }
})
const { reducer: productReducer } = productSlice

export const productLoadingSelector = () => (state) => state.products.isLoading
export const productListSelector = () => (state) => state.products.entities
export const productSelector = (productId) => (state) =>
  state.products.entities.find((product) => product._id === productId)

export default productReducer
