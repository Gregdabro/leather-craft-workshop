import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from "../services/product.service"
export const getProducts = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      const response = await productService.get()
      return response
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)
const initialState = {
  entities: [],
  isLoading: "idle",
  error: null
}

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = "success"
      state.entities = action.payload
      state.error = ""
    },
    [getProducts.pending]: (state) => {
      state.isLoading = "pending"
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = "failed"
    }
  }
})
const { reducer: productReducer } = productSlice

export const productLoadingStatusSelector = () => (state) =>
  state.products.isLoading
export const productListSelector = () => (state) => state.products.entities
export const productSelector = (productId) => (state) =>
  state.products.entities.find((product) => product._id === productId)

export default productReducer
