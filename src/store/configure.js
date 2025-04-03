import { configureStore } from "@reduxjs/toolkit";
import  gameReducser  from "./gameData";
import { favouriteReducer } from "./favoutrite";

const store = configureStore({
    reducer:{
        game:gameReducser,
        favourite:favouriteReducer
    }
})

export default store