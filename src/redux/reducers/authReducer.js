import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const authReducer = createReducer(initialState, {
    GET_OTP: (state)=>{
        state.loading = true
    },
    GET_OTP_SUCCESS: (state)=>{
        state.loading = false;
        state.otpsent = true;
        state.verifiedotp = false
    },
    GET_OTP_FAILED:(state,action)=>{
        state.loading = false;
        state.otpsent = false;
        state.error = action.payload
    },
    VERIFY_OTP:(state)=>{
        state.loading = true;
    },
    VERIFY_OTP_SUCCESS: (state, action)=>{
        state.loading = false;
        state.user = action.payload.user;
        state.verifiedotp = true;
        state.authenticated = true;
        localStorage.setItem("token" , action.payload.token);

    },
    VERIFY_OTP_FAILED: (state,action) => {
        state.loading = false;
        state.verifiedotp = false;
        state.authenticated = false;
        state.error = action.payload
    }

})