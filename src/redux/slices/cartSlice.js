import { createSlice } from "@reduxjs/toolkit";
import { calcTotalCount, calcTotalPrice } from "../../utils/calcToatalPrice";
import { getCartFromLs } from "../../utils/getCartFromLs";


const {dataCart,totalPrice,totalCount} = getCartFromLs()
const initialState = {
   dataCart,
   totalPrice,
   totalCount,
   isAdded: 0,
}

export const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItems(state, action) {
         const findItem = state.dataCart.find((obj) => obj.id === action.payload.id);
         if (findItem) {
            findItem.count++;

         } else {
            state.dataCart.push({
               ...action.payload,
               count: 1

            });

         }
        state.totalPrice = calcTotalPrice(state.dataCart)
        state.totalCount = calcTotalCount(state.dataCart)
      },
      minusItem(state, action) {

         const findItem = state.dataCart.find((obj) => obj.id === action.payload);
         if (findItem) (
            findItem.count--

         )
         if (findItem.count < 1) {
            findItem.count = 1
         }       
         state.totalCount = calcTotalCount(state.dataCart)
         state.totalPrice =  calcTotalPrice(state.dataCart)
      },
      removeItem(state, action) {
         state.dataCart = state.dataCart.filter((obj) => obj.id !== action.payload)
         state.totalCount = calcTotalCount(state.dataCart)
         state.totalPrice = calcTotalPrice(state.dataCart)
      }
     
   }
})
export const { addItems, clearItems, removeItem, minusItem } = cartSlice.actions

export default cartSlice.reducer