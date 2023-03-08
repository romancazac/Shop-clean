import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categoryId: "",
   paginationPage:1,
   limitPage:10,
   sortActive:['rating'],
   searchProduct:"",
   brand:0


}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategoryId(state, action) {
         state.categoryId = action.payload;
      },
      setPaginationPage(state, action) {
         state.paginationPage = action.payload;
      },
      setLimitPage(state, action) {
         state.limitPage = action.payload;
      },
      setSelectedPrice(state, action){
         state.selectedPrice = action.payload;
      },
      setSortActive(state, action){
         state.sortActive = action.payload;
      },
      setSearch(state,action) {
         state.searchProduct = action.payload;
      },
      setBrand(state, action) {
         state.brand = action.payload
      },

      setReset(state) {
         state.categoryId = "";
         state.sortActive = ['rating'];
         state.searchProduct = "";
         state.brand = "";
      }

   }
})

export const { setCategoryId, setPaginationPage, setLimitPage, setSelectedPrice, setSortActive, setFilters,setSearch,setBrand,setReset } = filterSlice.actions;
export default filterSlice.reducer