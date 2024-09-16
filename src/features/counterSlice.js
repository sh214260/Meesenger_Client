import { createSlice } from "@reduxjs/toolkit";

//להגדיר לסלייס את הסטייט ההתחלתי שלו

const initValue={
    counter:99
}

const counterSlice=createSlice({
    name:'counter',
    initialState:initValue,
    reducers:{
        add1:(state,action)=>{state.counter++},
        reduce1:(state, action)=>{state.counter--}
    }

})
export const {add1, reduce1}=counterSlice.actions
export default counterSlice.reducer