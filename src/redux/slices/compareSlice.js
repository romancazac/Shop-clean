import { createSlice } from "@reduxjs/toolkit"
import { getCompareFromLs } from "../../utils/getCompareFromLs";

const {dataCompare,countCompare} = getCompareFromLs()
console.log(getCompareFromLs())
const initialState = {
    dataCompare,
    countCompare
}

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addItems(state,action) {
            const findItem = state.dataCompare.find((obj)=> obj.id === action.payload.id);
            if(!findItem) {
                state.dataCompare.push({...action.payload})
                state.countCompare ++
            }
            
        },
        removeInCompare(state, action) {
            state.dataCompare = state.dataCompare.filter((item) => item.id !== action.payload)
            state.countCompare --
          }
    }
})

export const {addItems,removeInCompare} = compareSlice.actions
export default compareSlice.reducer
