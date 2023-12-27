import React, { useEffect } from 'react'
import './dashboard.scss'
import Navbar from '../../components/navbar/Navbar'
import ChallengeDashboard from '../../components/challengeDashboard/ChallengeDashboard'
import MyChallenges from '../../components/myChallenges/MyChallenges'
import { useDispatch, useSelector } from 'react-redux'
import { getMyChallenges } from '../../redux/actions/challengeActions'
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
    const dispatch = useDispatch();
    const { mychallenges } = useSelector((state) => state.challenge)

    useEffect(() => {
        dispatch(getMyChallenges())
    }, [dispatch])
    return (
        <>
            <Navbar />
            {
                mychallenges?.length !== 0 ?
                    <div className="dashboard">
                        <div className="section1">
                            <ChallengeDashboard />
                        </div>
                        <div className="section2">
                            <MyChallenges />
                        </div>
                    </div>
                    :
                    <div className="nochallenges">
                        <div className="section1">
                            <p>You have not participated in any challenge yet</p>
                            <span>Create one Challenge or Join Existing One</span>
                            <NavLink className='create_join_btn' to={'/join'} >Create/Join</NavLink>
                            {/* <button className='create_join_btn'>Create/Join</button> */}
                        </div>
                        <div className="section2">

                        </div>
                    </div>

            }

        </>
    )
}

export default Dashboard
