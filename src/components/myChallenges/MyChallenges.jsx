import React from 'react'
import './myChallenges.scss'
import ChallengeBox from './challengeBox/ChallengeBox'

const MyChallenges = () => {
  return (
    <div className="my_challenges">
        <p className="heading">My challenges</p>

        <div className="challenges">
            <ChallengeBox/>
        </div>
    </div>
    

  )
}

export default MyChallenges
