import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"CounterApp",
    initialState:{
            value:0
    },
    // Actions are created inside reducers key as object
    reducers:{
        // Logic to update state
        
        // Function to increment number
        increment:(state, action)=>{
            // If it is a function with arguments, then it can be only accessed by action and value will be in payload
            state.value += action.payload
        },
        // Function to decrement number
        decrement:(state, action)=>{
            // If it is a function with arguments, then it can be only accessed by action and value will be in payload
            state.value -= action.payload
        },
        // Function to reset
        reset:(state)=>{
            state.value = 0
        } 
    }
})

// Action is required by component to update state
export const {increment, decrement, reset} = counterSlice.actions

// Reducer is required by store to change the value of state
export default counterSlice.reducer