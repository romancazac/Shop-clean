import { createSlice } from "@reduxjs/toolkit";
import { getWishFromLs } from "../../utils/getWishFromLs";


const {items,countWish} = getWishFromLs()
const initialState = {
   items,
   countWish
}
export const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {
      addInWish(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload.id);
         if (!findItem) {
            state.items.push({ ...action.payload })
           state.countWish ++
         }
      },
      removeInWish(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload)
        state.countWish --
      }

   }
})
export const { addInWish,removeInWish } = wishSlice.actions;
export default wishSlice.reducer