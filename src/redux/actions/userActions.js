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


        const response = await axios.put('http://localhost:5000/api/user/profile/create',
            {
                profileData: newData,
                userId: "6547c98e4f4e1b97039fde71"
            },
            {
                headers: {
                    "Content-Type": "application/json",
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