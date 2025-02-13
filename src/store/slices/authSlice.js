import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token")



const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedIn :!!token,
    },
    reducers:{
        login(state,action){
            const idToken = action.payload.idToken;
            const uid = action.payload.localId;
            localStorage.setItem("token",idToken)
            localStorage.setItem("uid",uid)
            state.isLoggedIn=true;
        },

        logout(state,action){
            localStorage.removeItem("token")
            localStorage.removeItem("uid")
            state.isLoggedIn=false;
        }
    }
})

export const authAction = authSlice.actions


export default authSlice