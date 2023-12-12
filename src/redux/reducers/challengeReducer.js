import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const challengeReducer = createReducer(initialState, {
    CREATE_NEW_CHALLENGE: (state) => {
        state.loading = true;
    },
    CREATE_NEW_CHALLENGE_SUCCESS: (state) => {
        state.loading = false;
        state.challengeCreated = true;
    },
    CREATE_NEW_CHALLENGE_FAILED: (state, action) => {
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
    FETCH_ALL_CHALLENGES_FAILED: (state, action) => {
        state.loading = false;
        state.error = action.payload
    },
    FETCH_MY_CHALLENGES: (state) => {
        state.loading = true;
    },
    FETCH_MY_CHALLENGES_SUCCESS: (state, action) => {
        state.loading = false;
        state.mychallenges = action.payload.challenges;
    },
    FETCH_MY_CHALLENGES_FAILED: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    MARK_DAY_AS_COMPLETED: (state) => {
        state.marking = true;
    },
    MARK_DAY_AS_COMPLETED_SUCCESS: (state, action) => {
        state.marking = false;
        state.marked = true;
        state.mychallenges = state.mychallenges?.map((challenge) => {
            if (challenge._id === action.challengeID) {
                return {
                    ...challenge,
                    DayWisecompletedOn: [
                        ...challenge.DayWisecompletedOn,
                        action.payload.newData
                    ]
                }
            }
            return challenge
        })
        state.currentch = {
            ...state.currentch, DayWisecompletedOn: [
                ...state.currentch?.DayWisecompletedOn,
                action.payload.newData
            ]
        }

    },
    MARK_DAY_AS_COMPLETED_FAILED: (state, action) => {
        state.marking = false;
        state.marked = false;
        state.error = action.payload
    },

    JOIN_CHALLENGE: (state) => {
        state.loading = true;
    },
    JOIN_CHALLENGE_SUCCESS: (state, action) => {
        state.loading = false;
        state.joined = true;
    },
    JOIN_CHALLENGE_FAILED: (state, action) => {
        state.loading = false;
        state.joined = false;
        state.error = action.payload;
    },

    CLEAR_CREATE_CHALLENGE_TEMP: (state) => {
        state.joined = null;
        state.error = null;
        state.expandedch = {}

    },

    ADD_NOTE: (state) => {
        state.savingNote = true;
    },
    ADD_NOTE_SUCCESS: (state,action) => {
        state.savingNote = false;
        state.savedNote = true;
        state.mychallenges = state.mychallenges?.map((challenge) => {
            if (challenge._id === action.challengeID) {
                return {
                    ...challenge,
                    DayWisecompletedOn: [
                        action.dayWiseCompletedOn
                    ]
                }
            }
            return challenge
        })
        state.currentch.DayWisecompletedOn = action.dayWiseCompletedOn

    },
    ADD_NOTE_FAILED: (state) => {
        state.savingNote = false;
        state.savedNote = false;
    },
    CREAR_NOTE_TEMP: (state) => {
        state.savingNote = null;
        state.savedNote = null;
    },


    // temp
    SET_CURRENT_OPENED_CHALLENGE: (state, action) => {
        state.currentch = action.payload;
    },
    OPEN_CREATE_CHALLENGE_FORM: (state) => {
        state.opencreateForm = true;
        state.expandedch = null;
    },

    SET_CURRENT_EXPANDED_CHALLENGE: (state, action) => {
        state.expandedch = action.payload;
        state.opencreateForm = false;
    }


})