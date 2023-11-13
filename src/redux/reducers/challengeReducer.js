import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const challengeReducer = createReducer(initialState , {
    CREATE_NEW_CHALLENGE: (state) => {
        state.loading = true;
    },
    CREATE_NEW_CHALLENGE_SUCCESS: (state) => {
        state.loading = false;
        state.challengeCreated = true;
    },
    CREATE_NEW_CHALLENGE_FAILED : (state , action) => {
        state.loading = false;
        state.challengeCreated = false;
        state.error = action.payload;
    },
    FETCH_ALL_CHALLENGES: (state) => {
        state.loading = true;
    },
    FETCH_ALL_CHALLENGES_SUCCESS: (state, action) => {
        state.loading = false;
        state.challenges = action.payload.challenges
    },
    FETCH_ALL_CHALLENGES_FAILED: (state , action) => {
        state.loading = false;
        state.error = action.payload
    }
})