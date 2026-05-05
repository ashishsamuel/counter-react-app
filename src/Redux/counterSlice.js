import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counterValue: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    //actions like increment,decrement and reset are specified in this reducers object and each actions
    // value is a callback inside the callback we will get the initialstate value and using that we can
    // update the value inside the state
    reducers: {
        increment: (state)=>{
            state.counterValue +=1;
        },
        decrement: (state)=>{
            state.counterValue -=1;
        },
        reset: (state)=>{
            state.counterValue = 0;
        }
    }
})

//whenever an component dispatches an action defined inside this slice the control will comes inside the corresponding action and executes the logic written in its callback

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;