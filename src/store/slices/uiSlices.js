import { createSlice } from "@reduxjs/toolkit";



const uiSlice = createSlice({
    name:"ui",
    initialState:{notification:""},
    reducres:{
        showNotification(state,action){
            state.notification=action.payload
        }
    }
})


export const uiAction = uiSlice.actions;


export default uiSlice