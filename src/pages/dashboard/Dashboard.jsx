import React from 'react'
import './dashboard.scss'
import Navbar from '../../components/navbar/Navbar'
import ChallengeDashboard from '../../components/challengeDashboard/ChallengeDashboard'
import MyChallenges from '../../components/myChallenges/MyChallenges'


const Dashboard = () => {
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
