import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
   'products/fetchProductstatus',
   async (params) => {
      const { category, sort,  search,  page, brands } = params; 
      const  response  = await axios.get(`${BASE_URL}/products?${page}${category}${sort}${search}${brands}`)
      const totalCount = response.headers['x-total-count'];


      return {
         products: response.data,
         totalCount
      }
   }
)

const initialState = {
   products: [],
   totalCount: 0,
   status:"loading"


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
         state.products = [];
         state.totalCount = 0;
      },
      [fetchProducts.fulfilled]: (state, action) => {
         state.products = action.payload.products;
         state.totalCount = action.payload.totalCount;
         state.status = 'succes';
      },
      [fetchProducts.rejected]: (state) => {
         state.status = 'error';
         state.products = [];
         state.totalCount = 0;
      },
   }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer