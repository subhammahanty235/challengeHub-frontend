import React from 'react'
import './challengeBox.scss'
import { useDispatch, useSelector } from 'react-redux'
import { dateFormattingHelper } from '../../../utils/dateformatter'
const ChallengeBox = ({ item }) => {
  const dispatch = useDispatch()
  const { currentch } = useSelector((state) => state.challenge)
  return (
    <div className={`my_challenge_box ${currentch._id === item._id ? "active" : ""}`} onClick={() => {
      dispatch({
        type: "SET_CURRENT_OPENED_CHALLENGE",
        payload: item
      })
    }}>
      <p className="box_heading">
        {item?.name}
      </p>
      <p className="box_desc">{item?.description.length >= 45 ? item?.description.substr(0, 45) : item?.description}...</p>
      <div className="startdate_tenure">
        <p className="startDate">Start: <span>{dateFormattingHelper(item?.startDate)}</span></p>
        <p className="tenure">Duration: {item?.noOfdays}Days</p>

      </div>
      <p className={`status ${item.challengeStatus.status === 0 ? "Ongoing" : item.challengeStatus.status === 1 ? "Completed" : "Failed"}`}>{item.challengeStatus.status === 0 ? "Ongoing" : item.challengeStatus.status === 1 ? "Completed" : "Failed"}</p>
    </div>
  )
}

export default ChallengeBox
