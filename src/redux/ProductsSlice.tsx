import { Product, ProductsSliceState, ValidationState } from '../models/models'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { validateProduct } from '../Api/fakeApi'

export const addProductAsync = createAsyncThunk(
  'products/addNewProduct',
  async (initialProducts: Product) => {
    const product = await validateProduct(initialProducts)
    return product
  },
)

const initialProducts: Product[] = [
  { title: 'Counter Strike', price: 20, id: 'cs' },
  { title: 'God of War', price: 420, id: 'gow' },
  { title: 'Crash Bash', price: 50, id: 'cb' },
  { title: 'Dota 2', price: 127, id: 'd2' },
]

const initialState: ProductsSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    removeProduct: (state, action: PayloadAction<string>) => ({
      ...state,
      products: state.products.filter((product) => product.id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      validationState: ValidationState.Rejected,
      errorMessage: undefined,
      products: [...state.products, action.payload],
    }))
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      validationState: ValidationState.Fulfilled,
      errorMessage: action.error.message,
    }))
    builder.addCase(addProductAsync.pending, (state, action) => ({
      ...state,
      validationState: ValidationState.Pending,
      errorMessage: undefined,
    }))
  },
})

export const { addProduct, removeProduct } = productsSlice.actions

export const selectedProducts = (state: RootState) => state.products.products
export const getErrorMessage = (state: RootState) => state.products.errorMessage

export default productsSlice.reducer
