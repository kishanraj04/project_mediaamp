import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    sideToggle:true
}

const localVariableSclie = createSlice({
    name:'local-variable',
    initialState,
    reducers:{
       setSideBarToggel:(state,action)=>{
             state.sideToggle = !state.sideToggle
       }
    }
})

export const localVariableReducer = localVariableSclie.reducer
export const {setSideBarToggel} = localVariableSclie.actions