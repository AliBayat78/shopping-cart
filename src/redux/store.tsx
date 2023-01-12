import { configureStore } from '@reduxjs/toolkit'
import products from './ProductsSlice'
import cart from '../Cart/cartSlice'

const store = configureStore({
  reducer: { products, cart },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
