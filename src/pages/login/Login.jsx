import React , {useState} from 'react'
import './login.scss'
import {getOtp} from '../../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch();
  const {success} = useSelector((state)=>state.auth)
  const [email , setemail] = useState("")

  return (
    <div>
      <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
      <button onClick={()=>{
        dispatch(getOtp(email))
      }}>Get otp</button>

      {
        success === true?"OTP FETCHED":"OTP NOT FETCHED"
      }

    </div>
  )
}

export default Login