import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    // Only reducer can update value of state in store
    // Reducer key is predefined (object which can hold more than one reducer)
    reducer:{
        // Reducer comes from counterslice as we export reducer as export default
        counter:counterSlice
    }
})