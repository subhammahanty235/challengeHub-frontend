import React, { useEffect } from 'react'
import './dashboard.scss'
import Navbar from '../../components/navbar/Navbar'
import ChallengeDashboard from '../../components/challengeDashboard/ChallengeDashboard'
import MyChallenges from '../../components/myChallenges/MyChallenges'
import { useDispatch, useSelector } from 'react-redux'
import {getMyChallenges} from '../../redux/actions/challengeActions'
const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMyChallenges())
    },[dispatch])
    return (
        <>
            <Navbar />
            <div className="dashboard">

                <div className="section1">
                    <ChallengeDashboard/>
                </div>
                <div className="section2">
                    <MyChallenges/>
                </div>

            </div>
        </>
    )
}

export default Dashboard
