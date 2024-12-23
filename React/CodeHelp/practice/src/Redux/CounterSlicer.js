import { createSlice } from "@reduxjs/toolkit";



export const CounterSlice = createSlice({
 name:'counter',
 
 initialState :{
    value:10,
 },
 reducers:{
    increment:(state)=>{
        console.log("increment")
        state.value += 1;
    },
    decrement:(state)=>{
        state.value=0;

    },
 }
}) 

export const {increment, decrement} = CounterSlice.actions;

export default CounterSlice.reducer