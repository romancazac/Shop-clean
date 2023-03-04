import { createSlice } from "@reduxjs/toolkit";
import { calcTotalCount, calcTotalPrice } from "../../utils/calcToatalPrice";
import { getCartFromLs } from "../../utils/getCartFromLs";


const {items,totalPrice,totalCount} = getCartFromLs()
const initialState = {
   items,
   totalPrice,
   totalCount,
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
        state.totalPrice = calcTotalPrice(state.items)
        state.totalCount = calcTotalCount(state.items)
      },
      minusItem(state, action) {

         const findItem = state.items.find((obj) => obj.id === action.payload);
         if (findItem) (
            findItem.count--

         )
         if (findItem.count < 1) {
            findItem.count = 1
         }       
         state.totalCount = calcTotalCount(state.items)
         state.totalPrice =  calcTotalPrice(state.items)
      },
      removeItem(state, action) {
         state.items = state.items.filter((obj) => obj.id !== action.payload)
         state.totalCount = calcTotalCount(state.items)
         state.totalPrice = calcTotalPrice(state.items)
      }
     
   }
})
export const { addItems, clearItems, removeItem, minusItem } = cartSlice.actions

export default cartSlice.reducer