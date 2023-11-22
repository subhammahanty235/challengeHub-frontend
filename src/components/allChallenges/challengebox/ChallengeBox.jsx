import React from 'react'
import './challengeBox.scss'
import LockIcon from '../../../assets/icons/lock-icon.svg'
import { useDispatch } from 'react-redux'
const ChallengeBox = ({item}) => {
  const dispatch = useDispatch()
  const expandChallenge = () =>{
    dispatch({
      type:"SET_CURRENT_EXPANDED_CHALLENGE",
      payload:item
    })
    // window.history.pushState(null, null, `/challenges/challengeyd`);

  }

  return (
    <div className='challenge_box'>
        
        <p className="box_heading">{item?.name}{item?.visibility === "Protected" ? <img src={LockIcon} alt="" /> : <></>} </p>
        <p className="box_description">{item?.description.length >= 95? item?.description.substr(0,95) : item?.description}.....</p>
        <div className="duration_and_button">
            <p className="duration">Duration:  {item?.noOfdays} days</p>
            <button className="learn_more" onClick={expandChallenge}>Learn More</button>
        </div>

        <div className="tptbox"> <span>{item?.totalCrowd}+</span> Participants</div>
    </div>
  )
}

export default ChallengeBox
 