import React from 'react'
import './challengeBox.scss'

const ChallengeBox = (item) => {
  return (
    <div className='challenge_box'>
        
        <p className="box_heading">75 Hard Challenge</p>
        <p className="box_description">Lo?rem ipsum dolor sit, amet consectetur adipisicing elit. Hic omnis error totam?</p>
        <div className="duration_and_button">
            <p className="duration">19 days</p>
            <button className="learn_more">Learn More</button>
        </div>

        <div className="tptbox">12+ Participants</div>
    </div>
  )
}

export default ChallengeBox
