import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allgames:[]
}

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        setAllGames:(state,action)=>{
            state.allgames = action?.payload?.data 
        }
    }
})

export default gameSlice.reducer
export const {setAllGames} = gameSlice.actions