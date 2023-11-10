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

export const verifyOtp = (email , otp) => async(dispatch) => {
    try {
        dispatch({type:"VERIFY_OTP"});
        const response = await axios.post("http://localhost:5000/api/auth/verifyotp", 
        {
            email:email,
            otp:otp
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
        )

        console.log(response.data)

        if(response.data.success === true){
            dispatch({
                type:"VERIFY_OTP_SUCCESS",
                payload:response.data
            })
        }
        else{
            dispatch({
                type:"VERIFY_OTP_FAILED",
                payload:response.data.message
            })
        }

    } catch (error) {
        
    }
}
