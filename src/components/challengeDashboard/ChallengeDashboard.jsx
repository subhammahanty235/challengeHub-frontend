import React from 'react'
import './challengeDashboard.scss'
import { useSelector, useDispatch } from 'react-redux'
import { dateFormattingHelper } from '../../utils/dateformatter'
import { getDayfromStarted } from '../../utils/getDayfromStarted'
import { markDayAsCompleted } from '../../redux/actions/challengeActions'
import Dialog from '@mui/material/Dialog';
import LoadingAnimation from '../../assets/images/loading.svg'
import LoadingWhite from '../../assets/images/loading-white.svg'
const ChallengeDashboard = () => {
    const { loading, marking, currentch } = useSelector((state) => state.challenge)
    const dispatch = useDispatch();
    // const loading = true;

    const getDate = (pdate) => {
        const date = new Date(pdate);

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;
        return currentDate;
    }

    return (
        <>
            {
                loading === true ? <div className="loading"><img src={LoadingWhite} alt="" /></div> :
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
                                    currentch.includeStartDate === true && currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())) ?
                                        <></> :
                                        currentch.includeStartDate === false && getDate(currentch.startDate) === (getDate(new Date())) ?
                                            <></> :
                                            <div className="mark_today">
                                                <p className="mark">Completed today's goals?</p>
                                                <button onClick={() => {
                                                    dispatch(markDayAsCompleted(currentch?._id))
                                                }}>Yeah, Done</button>
                                            </div>
                                    // currentch?.DayWisecompletedOn.some(day => day.dayNumber === getDayfromStarted(currentch?.startDate)) ?
                                    //     <></>
                                    //     :
                                    //     <div className="mark_today">
                                    //         <p className="mark">Completed today's goals?</p>
                                    //         <button onClick={() => {
                                    //             dispatch(markDayAsCompleted(currentch?._id))
                                    //         }}>Yeah, Done</button>
                                    //     </div>
                                }
                               
                            </div>
                        </div>

                        <div className="day_wise_map">
                            <p className="map_heading">
                                Here's your day wise task and their statuses
                            </p>

                            <div className="today_status">
                                <p className="date">Current Date: {getDate(new Date())}</p>
                                <p className="status"> Status:
                                    {
                                        // const dayyy = currentch.includeStartDate === false? currentch?.DayWisecompletedOn?.find((data) => data.dayNumber === index + 1) :(
                                        //     currentch?.DayWisecompletedOn?.find((data) =>  data.dayNumber === index)

                                        // );
                                        // currentch.includeStartDate === false? currentch?.DayWisecompletedOn?.find((data) => )

                                        currentch.includeStartDate === true && currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())) ? " Completed" : currentch.includeStartDate === false && getDate(currentch.startDate) === (getDate(new Date())) ? " Warm Up Day" : " Not yet Done"

                                    }

                                </p>
                            </div>

                            <div className="maps">
                                {
                                    Array.from({ length: currentch?.noOfdays }, (_, index) => {
                                        const dayyy = currentch.includeStartDate === false ? currentch?.DayWisecompletedOn?.find((data) => data.dayNumber === index + 1) : (
                                            currentch?.DayWisecompletedOn?.find((data) => data.dayNumber === index)

                                        );
                                        if (!dayyy) {
                                            return <div key={index} className={`map`}>
                                            </div>
                                        } else {
                                            return <div key={index} className={`map ${dayyy.status === true ? 'completed' : ''}`}>
                                            </div>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
            <Dialog onClose={() => { }} open={marking} PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}>
                <img src={LoadingAnimation} alt="" />
            </Dialog>

        </>
    )
}

export default ChallengeDashboard
