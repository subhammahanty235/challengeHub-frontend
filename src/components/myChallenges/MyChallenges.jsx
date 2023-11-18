import React from 'react'
import './myChallenges.scss'
import ChallengeBox from './challengeBox/ChallengeBox'
import { useSelector } from 'react-redux'
// import LoadingAnimation from '../../assets/images/loading.svg'
import LoadingWhite from '../../assets/images/loading-white.svg'
const MyChallenges = () => {

    const {loading,  mychallenges } = useSelector((state) => state.challenge)
   
    return (
        <div className="my_challenges">
            <p className="heading">My challenges</p>
            {
                loading === true ?
                <div className="loading"><img src={LoadingWhite} alt="" /></div> :
                    <div className="challenges">
                        
                        {
                            mychallenges?.map((item) => {
                                return <ChallengeBox key={item._id} item={item} />
                            })
                        }
                    </div>
            }

        </div>


    )
}

export default MyChallenges
