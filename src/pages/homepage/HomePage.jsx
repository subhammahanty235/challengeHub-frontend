import React from 'react'
import CreateChallenge from '../../components/createChallenge/CreateChallenge'
import './homepage.scss'
import AllChallenges from '../../components/allChallenges/AllChallenges'
const HomePage = () => {
  return (
    <div className='homepage'>
        <div className="section1">
        <CreateChallenge/>
        </div>
        <div className="section2">
            <AllChallenges/>
        </div>
    </div>
  )
}

export default HomePage