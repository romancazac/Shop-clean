import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    openPopup:"",
  
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopup(state,action) {
         state.openPopup = action.payload

            
        },

    }
})

export const {setPopup} = popupSlice.actions
export default popupSlice.reducer
