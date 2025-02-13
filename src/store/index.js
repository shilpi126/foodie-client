import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlices";
import cartSlice from "./slices/cartSlice";
import recipeSlice from "./slices/recipeSlice";


const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        ui:uiSlice.reducer,
        cart:cartSlice.reducer,
        recipe:recipeSlice.reducer,
    }
})


export default store;