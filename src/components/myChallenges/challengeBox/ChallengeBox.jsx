import React from 'react'
import './challengeBox.scss'

const ChallengeBox = () => {
  return (
    <div className='challenge_box'>
      <p className="box_heading">
        DSA/AI Master challenge
      </p>
      <p className="box_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam vitae at pariatur?</p>
      <div className="startdate_tenure">
        <p className="startDate">Start: <span>7/12/23</span></p>
        <p className="tenure">Duration: 30Days</p>

      </div>
      <p className="status">Ongoing</p>
    </div>
  )
}

export default ChallengeBox
