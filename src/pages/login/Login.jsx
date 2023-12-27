import React, { useEffect, useState } from 'react'
import './login.scss'
import { getOtp, verifyOtp } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import OtpInput from 'react-otp-input';
import { useSnackbar, SnackbarProvider } from 'notistack';
import { useNavigate } from 'react-router-dom';
import AlertRibbon from '../../common/alert/Alert'
import useOtpResendTimer from '../../utils/useOtpResendTimer';
const Login = () => {
  
  const dispatch = useDispatch();
  const [showAlert , setShowAlert] = useState({flag:false , message:"" , type:""});
  const { loading , otpsent, verifiedotp, user, authenticated, error } = useSelector((state) => state.auth)
  const [email, setemail] = useState("")
  const [otp, setOtp] = useState()
  const navigate = useNavigate()

  const {seconds , startTimer , active , resetTimer , timerFinished} = useOtpResendTimer(120);

  useEffect(() => {
    if (verifiedotp === true && authenticated === true) {
      if (user.profileCreated === false) {
        navigate('/createprofile')
      } else {
        navigate('/')
      }
    }
  }, [authenticated, user, verifiedotp])

  // const [open, setOpen] = useState(true);

  // const handleClickVariant = (message, variant) => {
  //   // variant could be success, error, warning, info, or default
  //   console.log("calling")
  //   enqueueSnackbar(message, { variant });
  // };




  return (
    <div className='login_screen'>
      <div className="login_form_illustration">
        Challenge <br /> <span> HUB</span>
        {/* <img src={LoginScreenIllustration} alt="" /> */}
      </div>


      {

        otpsent === true && verifiedotp === false || verifiedotp === null ?
          <>
            <div className="login_page_form_components">
            <AlertRibbon open={showAlert.flag} message={showAlert.message} severity={showAlert.type} setOpen={setShowAlert}/>
              <p className="login_page_header">Enter The OTP</p>
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
                  {
                    timerFinished ?
                    <p className="resend" onClick={()=>{dispatch(getOtp(email))}}>Resend</p>:
                    <p className="timer">Resend in {seconds}s</p>
                  }
                </div>
                <button className='get_otp_button' onClick={() => { 
                  if(error !== '' || error !== undefined){
                    setShowAlert({
                      flag:true,
                      message:error,
                      type:"error"
                    })
                  }
                  dispatch(verifyOtp(email, otp)) 
                  }}>Verify OTP</button>
              </div>
            </div>
          </>
          :
          <>
            <div className="login_page_form_components">
              <AlertRibbon open={showAlert.flag} message={showAlert.message} severity={showAlert.type} setOpen={setShowAlert}/>

              <p className="login_page_header">Are U Ready? <br /><span>TO CHALLENGE YOURSELF</span></p>
              {/* <p className="login_page_subheader">A LIST OF CHALLENGES FOR YOU</p> */}
              <div className="main_login_form">

                <input placeholder='Enter email' type="text" className="email_input" value={email} onChange={(e) => { setemail(e.target.value) }} />

                <button className='get_otp_button'
                disabled={loading===true?true:false}
                onClick={() => {
                  if (email.length <= 4) {
                    setShowAlert({
                      flag:true,
                      message:"Please provide a valid emailId",
                      type:"error"
                    })
                    // handleClickVariant("Please provide a valid emailId", "warning")
                  } else {
                    dispatch(getOtp(email))
                    startTimer();

                  }

                }}>{loading === true ? "Generating OTP":"Get OTP"}</button>
              </div>

            </div>

          </>



      }







    </div>
  )
}

export default Login