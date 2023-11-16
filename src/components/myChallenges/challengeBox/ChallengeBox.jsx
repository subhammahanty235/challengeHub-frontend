import React from 'react'
import './challengeBox.scss'
import { useDispatch , useSelector} from 'react-redux'

const ChallengeBox = ({item}) => {
    const dispatch = useDispatch()
    const {currentch} = useSelector((state) => state.challenge)
  return (
    <div className={`challenge_box ${currentch._id === item._id? "active":""}`} onClick={()=>{
        dispatch({
            type:"SET_CURRENT_OPENED_CHALLENGE",
            payload:item
        })
    }}>
      <p className="box_heading">
        {item?.name}
      </p>
      <p className="box_desc">{item.description}</p>
      <div className="startdate_tenure">
        <p className="startDate">Start: <span>{item.created}</span></p>
        <p className="tenure">Duration: {item?.noOfdays}Days</p>

      </div>
      <p className="status">Ongoing</p>
    </div>
  )
}

export default ChallengeBox
