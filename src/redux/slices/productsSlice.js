import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
   'pizza/fetchProductstatus',
   async (params) => {
      const { 
         category,
         sort,
         search,
         page} = params;
      const { data } = await axios.get(`${BASE_URL}/products?${page}${category}${sort}${search}`)
  

     
      return data;
   }
)

const initialState = {
   products: []
  

}

export const productsSlice = createSlice({
   name: 'products',
   
   initialState,
   reducers: {
      setProducts(state, action) {
         state.products = action.payload;
      }
     
   },
   extraReducers: {
      [fetchProducts.pending]: (state) => {
         state.status = 'loading';
         state.products= []
      },
      [fetchProducts.fulfilled]: (state, action) => {
         
         state.products = action.payload;
         state.status = 'succes';
      },
      [fetchProducts.rejected]: (state) => {
         state.status = 'error';
         state.products = []
      },
   }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer