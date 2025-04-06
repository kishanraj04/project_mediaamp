import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    bannerImages :[]
}

const bannerSlice = createSlice({
    name:'local-variable',
    initialState,
    reducers:{
       serBannerImage:(state,action)=>{
             state.bannerImages = action.payload.image
       }
    }
})

export const bannerReducer = bannerSlice.reducer
export const {serBannerImage} = bannerSlice.actions