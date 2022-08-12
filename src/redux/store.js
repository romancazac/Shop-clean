import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice';
import products from './slices/productsSlice';
import cart from './slices/cartSlice';
import auth from './slices/userSlice';


export const store = configureStore({
  reducer: {
    filter,
    products,
    cart,
    auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})