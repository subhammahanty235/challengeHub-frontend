import React, { useState } from 'react'
import './createProfile.scss'
import Illustration1 from '../../assets/images/illustration1.svg'
const CreateProfile = () => {
    const [data, setdata] = useState({ name: '', mobileNumber: '', dateofbirth: '', gender: '', profilepic: '' });

    const onChangeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className="create_profile_screen">
            <div className="create_profile_illustration">
                <img src={Illustration1} alt="" />
            </div>

            <div className='create_profile_form'>
                <input placeholder='Name' type="text" name='name' value={data.name} onChange={(e) => { onChangeHandler(e) }} />
                <input placeholder='Mobile Number' type="text" name='mobileNumber' value={data.mobileNumber} onChange={(e) => { onChangeHandler(e) }} />
                <input placeholder='Date Of Birth' type="date" name='dateofbirth' value={data.dateofbirth} onChange={(e) => { onChangeHandler(e) }} />
                <input placeholder='Gender' type="text" name='gender' value={data.gender} onChange={(e) => { onChangeHandler(e) }} />
                <input placeholder='Profile Pic' type="text" name='profilepic' value={data.profilepic} onChange={(e) => { onChangeHandler(e) }} />
                <button onClick={() => {
                    console.log(data)
                }}>Save Profile</button>
            </div>
        </div>
    )
}

export default CreateProfile
