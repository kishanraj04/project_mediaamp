import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favouriteGame:[]
}

const favouriteSlice = createSlice({
    name:"favourite",
    initialState,
    reducers:{
        addToFavourite:(state,action)=>{
            state.favouriteGame = [...state?.favouriteGame,{status:true,...action?.payload?.favouriteGame}]
        },
        removeFromFavourite:(state,action)=>{
            state.favouriteGame = state?.favouriteGame?.filter((game)=>game?.id!=action?.payload?.id)
        }
    }
})

export const favouriteReducer = favouriteSlice.reducer
export const {addToFavourite,removeFromFavourite} = favouriteSlice.actions