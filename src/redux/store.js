import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';
import auth from './slices/userSlice';
import wish  from './slices/wishSlice';
import compare from './slices/compareSlice';
export const store = configureStore({
  reducer: {
    filter,
    products,
    cart,
    auth,
    wish,
    compare
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})