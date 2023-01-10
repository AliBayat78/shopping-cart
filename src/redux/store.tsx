import { configureStore } from '@reduxjs/toolkit'
import products from './ProductsSlice'

const store = configureStore({
  reducer: { products },
})

export type RootState = ReturnType<typeof store.getState>

export default store
