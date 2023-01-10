import { Product } from '../models/models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

const initialState: Product[] = [
  { title: 'Counter Strike', price: 20, id: 'cs' },
  { title: 'God of War', price: 420, id: 'gow' },
  { title: 'Crash Bash', price: 50, id: 'cb' },
  { title: 'Dota 2', price: 127, id: 'd2' },
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [...state, action.payload]
    },
  },
})

export const { addProduct } = productsSlice.actions

export const selectedProducts = (state: RootState) => state.products

export default productsSlice.reducer
