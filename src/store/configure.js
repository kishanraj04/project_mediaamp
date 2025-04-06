import { configureStore } from "@reduxjs/toolkit";
import  gameReducser  from "./gameData";
import { favouriteReducer } from "./favoutrite";
import { localVariableReducer } from "./localVariables";
import { bannerReducer } from "./banner";

const store = configureStore({
    reducer:{
        game:gameReducser,
        favourite:favouriteReducer,
        localVariable:localVariableReducer,
        banner:bannerReducer
    }
})

export default store