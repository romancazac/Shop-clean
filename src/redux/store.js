import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';
export const store = configureStore({
  reducer: {
     filter,
     products,
     cart
  },
})