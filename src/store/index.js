import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlices";


const store = configureStore({
    reducer:{auth:authSlice.reducer,
        ui:uiSlice.reducer,
    }
})


export default store;