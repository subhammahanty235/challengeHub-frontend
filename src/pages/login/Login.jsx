import React, { useState } from 'react'
import './login.scss'
import { getOtp, verifyOtp } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch();
  const { otpsent, verifiedotp , user } = useSelector((state) => state.auth)
  const [email, setemail] = useState("")
  const [otp, setotp] = useState()

  return (
    <div>
      {
        
          otpsent === true && verifiedotp === false || verifiedotp === null ?
          <>
          <input type="number" value={otp} onChange={(e) => { setotp(e.target.value) }} />
          <button
            onClick={() => {
              dispatch(verifyOtp(email, otp))
            }}
          >verify</button>
        </>
        :
        otpsent === true && verifiedotp === true ?
            <h1>Logged in an <br/> {user?.emailId} </h1>
          
            :
            <>
            <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <button onClick={() => {
              dispatch(getOtp(email))
            }}>Get otp</button>
          </>
      }


     

    </div>
  )
}

export default Login