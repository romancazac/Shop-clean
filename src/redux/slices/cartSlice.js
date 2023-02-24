import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   totalPrice: 0,
   totalCount: 0,
   isAdded: 0,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItems(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload.id);
         if (findItem) {
            findItem.count++;

         } else {
            state.items.push({
               ...action.payload,
               count: 1

            });

         }


         state.totalPrice = state.items.reduce((sum, obj) => {

            return obj.price * obj.count + sum;

         }, 0);

         state.totalCount = state.items.reduce((count, obj) => {
            return obj.count + count
         }, 0);
      },
      minusItem(state, action) {

         const findItem = state.items.find((obj) => obj.id === action.payload);
         if (findItem) (
            findItem.count--

         )
         if (findItem.count < 1) {
            findItem.count = 1
         }
         state.totalCount = state.items.reduce((count, obj) => {
            return obj.count + count
         }, 0);
         state.totalPrice = state.items.reduce((sum, obj) => {

            return obj.price * obj.count + sum;

         }, 0);
      },
      removeItem(state, action) {
         state.items = state.items.filter((obj) => obj.id !== action.payload)

         state.totalCount = state.items.reduce((count, obj) => {
            return obj.count + count
         }, 0);
         state.totalPrice = state.items.reduce((sum, obj) => {

            return obj.price * obj.count + sum;

         }, 0);
      }
     
   }
})
export const { addItems, clearItems, removeItem, minusItem, setIsAdded } = cartSlice.actions

export default cartSlice.reducer