import React from 'react'
import './myChallenges.scss'
import ChallengeBox from './challengeBox/ChallengeBox'
import { useSelector } from 'react-redux'

const MyChallenges = () => {

    const { loading, mychallenges } = useSelector((state) => state.challenge)
    return (
        <div className="my_challenges">
            <p className="heading">My challenges</p>
            {
                loading === true ?
                    <p>Loading ....</p> :
                    <div className="challenges">
                        
                        {
                            mychallenges?.map((item) => {
                                return <ChallengeBox item={item} />
                            })
                        }
                    </div>
            }

        </div>


    )
}

export default MyChallenges
