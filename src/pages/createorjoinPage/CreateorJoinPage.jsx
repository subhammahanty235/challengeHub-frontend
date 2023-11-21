import React from 'react'
import CreateChallenge from '../../components/createChallenge/CreateChallenge'
import './createOrJoin.scss'
import AllChallenges from '../../components/allChallenges/AllChallenges'
import Navbar from '../../components/navbar/Navbar'
import ExpandedChallenge from '../../components/expandedChallenge/ExpandedChallenge'
import { useSelector } from 'react-redux'
const CreateOrJoinPage = () => {
    const { opencreateForm ,expandedch} = useSelector((state) => state.challenge)
    return (
        <>
            <Navbar />
            <div className='homepage'>
                <div className="section1">
                    {
                        opencreateForm === true || !expandedch ?
                            <CreateChallenge /> :
                            <ExpandedChallenge />

                    }
                    {/* <CreateChallenge /> */}
                </div>
                <div className="section2">
                    <AllChallenges />
                </div>
            </div>
        </>
    )
}

export default CreateOrJoinPage