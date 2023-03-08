import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

// First, create the thunk
export const fetchCategories = createAsyncThunk(
   'categories/fetchCategoriestatus',
   async () => {

      const  response  = await axios.get(`${BASE_URL}/categories`)
      return response.data
   }
)

const initialState = {
   categories: [],
   status:"loading"


}

export const categoriesSlice = createSlice({
   name: 'categories',

   initialState,
   reducers: {
      setCategories(state, action) {
         state.categories = action.payload;
      }

   },
   extraReducers: {
      [fetchCategories.pending]: (state) => {
         state.status = 'loading';
         state.categories = [];
      },
      [fetchCategories.fulfilled]: (state, action) => {
         state.categories = action.payload;
         state.status = 'succes';
      },
      [fetchCategories.rejected]: (state) => {
         state.status = 'error';
         state.Categories = [];

      },
   }
})

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer