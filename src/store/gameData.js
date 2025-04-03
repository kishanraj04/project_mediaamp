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
            console.log("a ",action.payload);
            state.allgames = action?.payload?.data 
        },
        setTotalGames:(state,action)=>{
            console.log(action?.payload?.totalGames);
            state.totalData = action?.payload?.totalGames
        }
    }
})

export default gameSlice.reducer
export const {setAllGames,setTotalGames} = gameSlice.actions