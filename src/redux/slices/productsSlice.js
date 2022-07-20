import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
   'pizza/fetchProductstatus',
   async (params) => {
      // const { 
      //    category,
      //    sort,
      //    searchProduct,
      //    page} = params;
      // const { data } = await axios.get(`http://localhost:3001/Products?${page}${category}${sort}${searchProduct}`)
      const {category,page, sort} = params;

      const { data } = await axios.get(`https://625406a519bc53e234775c39.mockapi.io/eclean?${category}${page}${sort}`)
      return data;
   }
)

const initialState = {
   products: [   
   ],
  

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