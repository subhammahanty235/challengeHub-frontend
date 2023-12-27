import React, { useEffect, useState } from 'react'
import './profilePage.scss';
import Navbar from '../../components/navbar/Navbar';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import ChallengeBox from '../../components/myChallenges/challengeBox/ChallengeBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { KeyboardArrowUp } from '@mui/icons-material'
import { LogoutPopup } from '../../common/dialog/Dialogs';
import FilterIcon from '../../assets/icons/filter-icon.svg'
const ProfilePage = () => {

    const [selectedChallenges, setSelectedChallenges] = useState([])
    const { mychallenges } = useSelector((state) => state.challenge)
    
    const {user} = useSelector((state) => state.user)
    const [showFilter, setShowFilter] = useState(false)
    const [logoutDialogOpen,setLogoutDialogOpen ] = useState(false)
    const [counts , setCounts] = useState({total:0 , completed:0 , failed:0})

    const checkboxfunc = (val) => {
        console.log(val)
        if (selectedChallenges.includes(val)) {
            setSelectedChallenges(selectedChallenges.filter((chal) => chal !== val));
        } else {
            setSelectedChallenges([...selectedChallenges, val]);
        }
    }

    function stringAvatar(name) {
        let n1 = name?.split(' ')[0][0]
        let n2 = ''
        if (name?.split(' ')[1] !== undefined) {
            n2 = name?.split(' ')[1][0];
        }
        return `${n1}${n2 === '' ? '' : n2}`


        // return `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`

    }

    useEffect(()=>{
    setCounts({
           completed: mychallenges?.filter((chal) => chal?.challengeStatus?.status === 1)?.length,
           failed: mychallenges?.filter((chal) => chal?.challengeStatus?.status === 2)?.length,
           total:mychallenges?.length
    } )
     
    },[mychallenges])




    return (
        <>
            <Navbar />
            <div className='profile_page'>
                <div className="left_section">
                    <div className="user_profile">
                        <div className="avatar_name_email">
                            <div className="profile_avatar">{stringAvatar(user?.name)}</div>

                            <div className="name_email">
                                <p className="name">{user?.name}</p>
                                <p className="email">{user?.emailId}</p>
                            </div>

                            <div className="logout_button">
                                <button onClick={()=>{setLogoutDialogOpen(true)}}>Log Out</button>
                            </div>
                        </div>
                        <div className="challenge_insign_number">
                                <div className="inner_insights">
                                    Total Challenges
                                    <span>{counts?.total}</span>
                                </div>

                                <div className="inner_insights">
                                    Completed Challenges
                                    <span>{counts?.completed}</span>
                                </div>
                                <div className="inner_insights">
                                    Failed Challenges
                                    <span>{counts?.failed}</span>
                                </div>
                        </div>


                        <div className="profile_more_details">
                            <div className="basic_details">

                                <p className="gender">{user?.mobileNumber ? "Mobile Number: "+ user?.mobileNumber : "" }</p>
                                {/* <p className="dob">Date Of Birth: 01/11/2002</p> */}
                                {/* <div className="interests">
                                    <span>
                                        Interests:

                                    </span>
                                    <div className="interest_entry">
                                    
                                    </div>

                                </div> */}
                            </div>
                        </div>

                        <div className="soon_alert" onClick={()=>{console.log(counts)}}>
                            More Options Coming Soon !!
                        </div>


                    </div>
                </div>
                <div className="right_section">
                    <div className="heading_and_search">
                        {/* <input type="text" className='search_input' /> */}
                        <p className="heading">My Challenges</p>
                        <div className="searchButton" onClick={() => {
                            setShowFilter(!showFilter)

                        }}>
                            {
                                showFilter === true ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />
                            }


                            <img src={FilterIcon} alt="" />
                        </div>

                    </div>

                    <div className={`filterSection ${showFilter === true ? '' : 'show_filter'}`}>
                        <div className="completed_filtered_button">

                            <FormControlLabel
                            // style={{fontSize:"8px"}}
                                label="Completed"
                                value={1}
                                control={<Checkbox checked={selectedChallenges.includes("1")} onChange={(e) => { checkboxfunc(e.target.value) }} sx={{
                                    color: '#21BA45',
                                    '&.Mui-checked': {
                                        color: '#21BA45',
                                    },
                                }} />}
                            />
                        </div>
                        <div className="failed_filtered_button">

                        <FormControlLabel
                            value={2}
                            label="Failed"
                            control={<Checkbox checked={selectedChallenges.includes("2")} onChange={(e) => { checkboxfunc(e.target.value) }} sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                            />}
                            />
                            </div>
                        <FormControlLabel
                            value={0}
                            label="Ongoing"
                            control={<Checkbox checked={selectedChallenges.includes("0")} onChange={(e) => { checkboxfunc(e.target.value) }} sx={{
                                color: '#646cff',
                                '&.Mui-checked': {
                                    color: '#646cff',
                                },
                            }} />}
                        />

                    </div>

                    <div className="challenges_all">

                        {
                            selectedChallenges.length !== 0 ?
                                mychallenges?.filter((chal) => selectedChallenges?.includes((chal?.challengeStatus?.status).toString())).map((chal) => {
                                    console.log(chal)
                                    return <ChallengeBox key={chal._id} item={chal} />
                                })
                                :
                                mychallenges?.map((item) => {
                                    return <ChallengeBox key={item._id} item={item} />
                                })
                        }
                    </div>
                </div>

            </div>

            <LogoutPopup open={logoutDialogOpen} closePopup={()=>{setLogoutDialogOpen(false)}}/>
        </>
    )
}

export default ProfilePage
