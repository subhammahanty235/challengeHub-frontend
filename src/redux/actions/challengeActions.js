import axios from "axios";

export const createChallenge = (data, insdate) => async (dispatch) => {  //insdate ---> include start date
    try {
        if (data.name === '' || data.name === null || data.name === undefined) {
            dispatch({
                type: "CREATE_NEW_CHALLENGE_FAILED",
                payload: "Please provide a name"
            })
            return;
        }
        else {
            const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/challenge/create`,
                {
                    challengeData: data,
                    includeStartDate: insdate
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "token": localStorage.getItem("token")
                    },
                })
            if (response.data.success === true) {
                dispatch({
                    type: "CREATE_NEW_CHALLENGE_SUCCESS"

                })
            } else {
                dispatch({
                    type: "CREATE_NEW_CHALLENGE_FAILED",
                    payload: "Some Error Occured"
                })
            }
        }
    } catch (error) {
        dispatch({
            type: "CREATE_NEW_CHALLENGE_FAILED",
            payload: error.message
        })
    }
}

export const getAllChallenges = () => async (dispatch) => {
    try {
        dispatch({ type: "FETCH_ALL_CHALLENGES" })
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/challenge/getAll`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
            })

        if (response.data.success === true) {
            dispatch({
                type: "FETCH_ALL_CHALLENGES_SUCCESS",
                payload: response.data
            })
        } else {
            dispatch({
                type: "FETCH_ALL_CHALLENGES_FAILED",
                payload: "Some Error Occured"
            })
        }
    } catch (error) {
        dispatch({
            type: "FETCH_ALL_CHALLENGES_FAILED",
            payload: error.message
        })
    }
}

export const getMyChallenges = () => async (dispatch) => {
    try {
        dispatch({ type: "FETCH_MY_CHALLENGES" })
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/challenge/getmyChallenges`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
            })

        if (response.data.success === true) {
            dispatch({
                type: "FETCH_MY_CHALLENGES_SUCCESS",
                payload: response.data
            })
            dispatch({
                type: "SET_CURRENT_OPENED_CHALLENGE",
                payload: response.data.challenges[0]
            })
        } else {
            dispatch({
                type: "FETCH_MY_CHALLENGES_FAILED",
                payload: "Some Error Occured"
            })
        }
    } catch (error) {
        dispatch({
            type: "FETCH_MY_CHALLENGES_FAILED",
            payload: error.message
        })
    }
}

export const markDayAsCompleted = (challengeId) => async (dispatch) => {
    try {
        dispatch({ type: "MARK_DAY_AS_COMPLETED" })

        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/challenge/markasdone/${challengeId}`, {}, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })

        if (response.data.success === true) {

            dispatch({
                type: "MARK_DAY_AS_COMPLETED_SUCCESS",
                challengeID: challengeId,
                payload: response.data
            })
        } else {
            dispatch({
                type: "MARK_DAY_AS_COMPLETED_FAILED",
                payload: "Some Error Occured"
            })
        }

    } catch (error) {
        dispatch({
            type: "MARK_DAY_AS_COMPLETED_FAILED",
            payload: error.message
        })
    }
}

export const joinChallenge = (data) => async (dispatch) => {
    try {
        dispatch({ type: "JOIN_CHALLENGE" })
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/challenge/join`, {
            data: data
        }, {
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
            }
        })

        if (response.data.success === true) {

            dispatch({
                type: "JOIN_CHALLENGE_SUCCESS",
            })
            getMyChallenges();
        } else {
            dispatch({
                type: "JOIN_CHALLENGE_FAILED",
                payload: response.data.message
            })
        }

    } catch (error) {
        dispatch({
            type: "JOIN_CHALLENGE_FAILED",
            payload: error.message
        })
    }
}

