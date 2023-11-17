import React from 'react'
import './challengeDashboard.scss'
import { useSelector,useDispatch } from 'react-redux'
import { dateFormattingHelper } from '../../utils/dateformatter'
import { getDayfromStarted } from '../../utils/getDayfromStarted'
import {markDayAsCompleted} from '../../redux/actions/challengeActions'

const ChallengeDashboard = () => {
    const { loading, currentch } = useSelector((state) => state.challenge)
    const dispatch = useDispatch();

    return (
        <>
            {
                loading === true ? 'Loading ....' :
                    <div className="challenge_dashboard">
                        <div className="challenge_datails">
                            <div className="name_desc">
                                <p className="challenge_name">{currentch?.name}</p>
                                <p className="challenge_desc">{currentch?.description}</p>
                            </div>
                            <div className="other_details">


                                <div className="dates">
                                    <p className="start_date">Started on: {dateFormattingHelper(currentch?.startDate)}</p>
                                    <p className="expectedEnd">Expected Deadline: {dateFormattingHelper(currentch?.expectedEnd)}</p>
                                </div>

                                <div className="currentPerformance">
                                    <p>Current Performance Score: <span>75</span> </p>
                                </div>

                                {
                                    currentch?.DayWisecompletedOn.some(day => day.dayNumber === getDayfromStarted(currentch?.startDate)) ?
                                       <></>
                                        :
                                        <div className="mark_today">
                                        <p className="mark">Completed today's goals?</p>
                                        <button onClick={()=>{
                                            dispatch(markDayAsCompleted(currentch?._id))
                                        }}>Yeah, Done</button>
                                    </div>
                                }
                                {/* <div className="mark_today">
                                    <p className="mark">Completed today's goals?</p>
                                    <button>Yeah, Done!</button>
                                </div> */}
                            </div>
                        </div>

                        <div className="day_wise_map">
                            <p className="map_heading">
                                Here's your day wise task and their statuses
                            </p>

                            <div className="today_status">
                                <p className="date">Current Date: 7th December 2023</p>
                                <p className="status">Status: Not Yet Completed</p>
                            </div>

                            <div className="maps">
                                {
                                    Array.from({ length: currentch?.noOfdays }, (_, index) => {
                                        const dayyy = currentch?.DayWisecompletedOn?.find((data) => data.dayNumber === index + 1);
                                        if (!dayyy) {
                                            return <div className={`map`}>
                                            </div>
                                        } else {
                                            return <div className={`map ${dayyy.status === true ? 'completed' : ''}`}>
                                            </div>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ChallengeDashboard
