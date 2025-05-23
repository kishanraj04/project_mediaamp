import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allgames:[],
    totalData:0
}

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        setAllGames:(state,action)=>{
            state.allgames = action?.payload?.data 
        },
        setTotalGames:(state,action)=>{
            state.totalData = action?.payload?.totalGames
        }
    }
})

export default gameSlice.reducer
export const {setAllGames,setTotalGames} = gameSlice.actions