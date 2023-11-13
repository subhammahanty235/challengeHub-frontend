import React, { useEffect } from 'react'
import './allChallenges.scss'
import { useSelector, useDispatch } from 'react-redux'
import {getAllChallenges} from '../../redux/actions/challengeActions'
import ChallengeBox from './challengebox/ChallengeBox'
const AllChallenges = () => {
    const dispatch = useDispatch()
    const {loading , challenges} = useSelector((state)=> state.challenge)

    useEffect(()=>{
        dispatch(getAllChallenges())
    },[dispatch])
  return (
    <div className="all_challenges">
        <p className="heading">More For You</p>

        <div className="challenges">
            {
                challenges?.map((item)=> {
                    return <ChallengeBox item={item}/>
                })
            }
        </div>
    </div>
  )
}

export default AllChallenges