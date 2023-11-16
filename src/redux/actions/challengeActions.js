import axios from "axios";

export const createChallenge = (data) => async(dispatch) => {
    try {
        if(data.name === '' || data.name === null || data.name === undefined){
            dispatch({
                type:"CREATE_NEW_CHALLENGE_FAILED",
                payload:"Please provide a name"
            })
            return;
        }
        else{
            const response = await axios.post('http://localhost:5000/api/challenge/create' , 
            {
                challengeData : data,
                createdBy:"6547c98e4f4e1b97039fde71"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            console.log(response.data)
            if(response.data.success === true){
                dispatch({
                    type:"CREATE_NEW_CHALLENGE_SUCCESS"
                })
            }else{
                dispatch({
                    type:"CREATE_NEW_CHALLENGE_FAILED",
                    payload:"Some Error Occured"
                })
            }
        }
    } catch (error) {
        dispatch({
            type:"CREATE_NEW_CHALLENGE_FAILED",
            payload:error.message
        })
    }
}

export const getAllChallenges = () => async(dispatch) =>{
    try {
        dispatch({type:"FETCH_ALL_CHALLENGES"})
        const response = await axios.get('http://localhost:5000/api/challenge/getAll/654e75df282424675761ae53',
        {
            headers: {
                "Content-Type": "application/json",
            },
        })

        if(response.data.success === true){
            dispatch({
                type:"FETCH_ALL_CHALLENGES_SUCCESS",
                payload:response.data
            })
        }else{
            dispatch({
                type:"FETCH_ALL_CHALLENGES_FAILED",
                payload:"Some Error Occured"
            })
        }
    } catch (error) {
        dispatch({
            type:"FETCH_ALL_CHALLENGES_FAILED",
            payload:error.message
        })
    }
}

export const getMyChallenges = () => async(dispatch) =>{
    try {
        dispatch({type:"FETCH_MY_CHALLENGES"})
        const response = await axios.get('http://localhost:5000/api/challenge/getmyChallenges/6547c98e4f4e1b97039fde71',
        {
            headers: {
                "Content-Type": "application/json",
            },
        })

        if(response.data.success === true){
            dispatch({
                type:"FETCH_MY_CHALLENGES_SUCCESS",
                payload:response.data
            })
            dispatch({
                type:"SET_CURRENT_OPENED_CHALLENGE",
                payload: response.data.challenges[0]
            })
        }else{
            dispatch({
                type:"FETCH_MY_CHALLENGES_FAILED",
                payload:"Some Error Occured"
            })
        }
    } catch (error) {
        dispatch({
            type:"FETCH_MY_CHALLENGES_FAILED",
            payload:error.message
        })
    }
}

