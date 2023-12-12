import axios from "axios";

export const createProfile = (data) => async (dispatch) => {
    try {
        dispatch({
            type: "CREATE_USER_PROFILE",

        })
        const newData = {};
        if (data.name === '' || data.name === null || data.name === undefined) {
            dispatch({
                type: "CREATE_USER_PROFILE_FAILED",
                payload: "Please provide a name"
            })
        }
        console.log(data)
        if (data.name !== '' && data.name !== null && data.name !== undefined) {
            newData.name = data.name;
        }

        if (data.mobileNumber !== '' && data.mobileNumber !== null && data.mobileNumber !== undefined) {
            newData.mobileNumber = data.mobileNumber;
        }

        if (data.dateOfBirth !== '' && data.dateOfBirth !== null && data.dateOfBirth !== undefined) {
            newData.dateOfBirth = data.dateOfBirth;
        }

        if (data.profilePic !== '' && data.profilePic !== null && data.profilePic !== undefined) {
            newData.profilePic = data.profilePic;
        }


        const response = await axios.put(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/user/profile/create`,
            {
                profileData: newData,

            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
            }
        )



        if (response.data.success === true) {
            dispatch({
                type: "CREATE_USER_PROFILE_SUCCESS",
            })


        }

    } catch (error) {

    }
}

export const fetchUser = () => async(dispatch) => {
    try {
        dispatch({
            type:"FETCH_USER_DATA"
        })
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/user/profile/get`,
           
            {
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
            }
        )
        console.log(response.data)

        if(response.data.success){
            dispatch({
              type: "FETCH_USER_DATA_SUCCESS",
              payload:response.data
            })
        }else{
            dispatch({
                type:"FETCH_USER_DATA_FAILED",
                payload:response.data.message
            })
        }
    } catch (error) {

    }
}