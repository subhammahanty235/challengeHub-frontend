import axios from 'axios'

export const getOtp = (email) => async(dispatch) => {
    try {
        dispatch({type:"GET_OTP"});
        const response = await axios.post("http://localhost:5000/api/auth/generateotp" , 
        {
            email:email
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
        )

        if(response.data.success === true){
            dispatch({
                type:"GET_OTP_SUCCESS"
            })
        }
        else{
            dispatch({
                type:"GET_OTP_FAILED",
                payload:response.data.message
            })
        }

    } catch (error) {
        
    }
}