import { configureStore } from "@reduxjs/toolkit";
import  gameReducser  from "./gameData";

const store = configureStore({
    reducer:{
        game:gameReducser
    }
})

export default store