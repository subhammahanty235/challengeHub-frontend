import React, { useEffect, useState } from 'react'
import './createProfile.scss'
import { useDispatch } from 'react-redux'
import { createProfile } from '../../redux/actions/userActions'
import Illustration1 from '../../assets/images/illustration1.svg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
const CreateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { profilecreated } = useSelector((state) => state.user)
    const [data, setdata] = useState({ name: '', mobileNumber: '', dateofbirth: '', gender: '', profilepic: '' });
    useEffect(() => {
        if (profilecreated === true) {
            navigate('/')
        }
    }, [profilecreated, dispatch])

    const onChangeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className="create_profile_screen">
            <div className="create_profile_illustration">
                <img src={Illustration1} alt="" />
            </div>

            <div className='create_profile_form'>
                <p className="header">Create Profile</p>
                <input placeholder='Name' type="text" name='name' value={data.name} onChange={(e) => { onChangeHandler(e) }} />
                <input placeholder='Mobile Number' type="text" name='mobileNumber' value={data.mobileNumber} onChange={(e) => { onChangeHandler(e) }} />
                <input placeholder='Date Of Birth' type="date" name='dateofbirth' value={data.dateofbirth} onChange={(e) => { onChangeHandler(e) }} />
                {/* <input placeholder='Gender' type="text" name='gender' value={data.gender} onChange={(e) => { onChangeHandler(e) }} /> */}

                <FormControl sx={{ width: "70%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: "0px 10px" }}>
                    <FormLabel id="gender_input">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={data.gender}
                        onChange={(e)=>{setdata({...data , gender:e.target.value})}}
                    >
                        <FormControlLabel value="Female" control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#646cff' } }} />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#646cff' } }} />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#646cff' } }} />} label="Other" />

                    </RadioGroup>
                </FormControl>
                {/* <input placeholder='Profile Pic' type="text" name='profilepic' value={data.profilepic} onChange={(e) => { onChangeHandler(e) }} /> */}
                <button onClick={() => {
                    dispatch(createProfile(data))
                }}>Save Profile</button>
            </div>
        </div>
    )
}

export default CreateProfile
