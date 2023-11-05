import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const authReducer = createReducer(initialState, {
    GET_OTP: (state)=>{
        state.loading = true
    },
    GET_OTP_SUCCESS: (state)=>{
        state.loading = false;
        state.success = true;
    },
    GET_OTP_FAILED:(state,action)=>{
        state.loading = false;
        state.success = false;
        state.error = action.payload
    }
})