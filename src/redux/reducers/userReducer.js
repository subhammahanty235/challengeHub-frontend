import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const userReducer = createReducer(initialState , {
    FETCH_USER_DATA: (state)=>{
        state.fuserloading = true;
    },
    FETCH_USER_DATA_SUCCESS: (state, action)=>{
        state.fuserloading = false;
        state.user = action.payload.user;
        state.success = true;
    },
    FETCH_USER_DATA_FAILED: (state)=>{
        state.fuserloading = false;
        state.success = false;
        state.error = action.payload
    },
    CREATE_USER_PROFILE: (state)=>{
        state.loading = true;

    },
    CREATE_USER_PROFILE_SUCCESS: (state)=>{
        state.loading = false;
        state.profilecreated = true;
        

    },
    CREATE_USER_PROFILE_FAILED: (state, action)=>{
        state.loading = false;
        state.profilecreated = false;
        state.error = action.payload
    },
})