import { createSlice } from "@reduxjs/toolkit";

const getWishFromLs = () => {
   const items = localStorage.getItem("wish");
   return items ? JSON.parse(items) : []
}
console.log(getWishFromLs())
const initialState = {
   items: getWishFromLs(),
   countWish:0
}
export const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {
      addInWish(state, action) {
         const findItem = state.items.find((obj) => obj.id === action.payload.id);
         if (!findItem) {
            state.items.push({ ...action.payload })
            state.countWish = state.items.length
         }
      },
      removeInWish(state, action) {
        state.items = state.items.filter((item) => item.id !== action.payload)
       
      }

   }
})
export const { addInWish,removeInWish } = wishSlice.actions;
export default wishSlice.reducer