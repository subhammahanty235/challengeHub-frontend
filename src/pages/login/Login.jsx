import React, { useState } from 'react'
import './login.scss'
import { getOtp, verifyOtp } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input';
import LoginScreenIllustration from '../../assets/images/login-illustration.svg'
const Login = () => {
  const dispatch = useDispatch();
  const { otpsent, verifiedotp, user } = useSelector((state) => state.auth)
  const [email, setemail] = useState("")
  const [otp, setOtp] = useState()

  return (
    <div className='login_screen'>
      <div className="login_form_illustration">
        {/* <img src={LoginScreenIllustration} alt="" /> */}
      </div>


      {

        otpsent === true && verifiedotp === false || verifiedotp === null ?
          <>
            <div className="login_page_form_components">
              <p className="login_page_header">Enter Your Emailid</p>
              <div className="main_login_form">
                {/* <input type="text" className="email_input" /> */}
                <OtpInput
                  containerStyle={{ width: "64%" }}
                  inputStyle={{ width: "17%", height: "50px", fontSize: "30px" }}
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  shouldAutoFocus={true}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <div className="resend_and_timer">
                  <p className="resend">resend</p>
                  <p className="timer">120</p>
                </div>
                <button className='get_otp_button' onClick={()=>{dispatch(verifyOtp(email , otp))}}>Verify OTP</button>
              </div>
            </div>
          </>
          :
          <>
            <div className="login_page_form_components">
              <p className="login_page_header">Enter Your emailid</p>
              <div className="main_login_form">

                <input type="text" className="email_input" value={email} onChange={(e)=>{setemail(e.target.value)}} />

                <button className='get_otp_button' onClick={()=>{dispatch(getOtp(email))}}>Get OTP</button>
              </div>
            </div>
          </>



      }




    </div>
  )
}

export default Login