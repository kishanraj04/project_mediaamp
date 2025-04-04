import { configureStore } from "@reduxjs/toolkit";
import  gameReducser  from "./gameData";
import { favouriteReducer } from "./favoutrite";
import { localVariableReducer } from "./localVariables";

const store = configureStore({
    reducer:{
        game:gameReducser,
        favourite:favouriteReducer,
        localVariable:localVariableReducer
    }
})

export default store