import React, { useState } from 'react'
import './challengeDashboard.scss'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTimeRemaining } from '../../utils/timeHelperFunctions'
// import { getDayfromStarted } from '../../utils/getDayfromStarted'
import { markDayAsCompleted } from '../../redux/actions/challengeActions'
import Dialog from '@mui/material/Dialog';
import LoadingAnimation from '../../assets/images/loading.svg'
import LoadingWhite from '../../assets/images/loading-white.svg'
import { AddNotePopup } from '../../common/dialog/Dialogs'
import PenIcon from '../../assets/icons/pen-icon.svg'
import TickIcon from '../../assets/icons/tick-icon.svg'
import SmileIcon from '../../assets/icons/smile-icon.svg'
// import DetailedProgressAccordian from '../../common/accordian/detailedProgressAccordian'
// import DetailedProgressesAccordian from '../../common/accordian/DetailedProgressesAccordian'
import DetailedDWC from './detailedDWC/DetailedDWC'
import DetailedDWCIcon from '../../assets/icons/detailedDWC-icon.svg'
import NormalDWCIcon from '../../assets/icons/normal-map-dwc.svg'
const ChallengeDashboard = () => {


    const { loading, marking, currentch, showdetailed } = useSelector((state) => state.challenge)
    const [openNotePopup, setOPenNotePopup] = useState(false)  //to open or close add note popup
    // const [minimizePopup, setMinimizePopup] = useState(false)  //to minimize the add note popup, instead of closing it
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
    const [showDWC, setShowDWC] = useState(false);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // Update the timer every second
    //     const intervalId = setInterval(() => {
    //         setTimeRemaining(calculateTimeRemaining());
    //     }, 1000);

    //     // Clear the interval when the component is unmounted
    //     return () => clearInterval(intervalId);
    // }, []);


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
                                <p className="challenge_name">{currentch?.name} <p><span style={{ backgroundColor: currentch?.challengeStatus.status === 0 ? "#21BA45" : currentch?.challengeStatus.status === 1 ? "#535bf2" : "red" }}></span>{currentch?.challengeStatus.status === 0 ? "Ongoing" : currentch?.challengeStatus.status === 1 ? "Completed" : "Failed"}</p></p>
                                <p className="challenge_desc">{currentch?.description}</p>
                            </div>
                            <div className="other_details">


                                <div className="dates">
                                    <p className="start_date">Started on: {getDate(currentch?.startDate)}</p>
                                    <p className="expectedEnd">Endind On: {getDate(currentch?.expectedEnd)}</p>
                                </div>

                                <div className="currentPerformance">
                                    <p>Current Performance Score: <span>{currentch?.performanceScore}</span> </p>
                                </div>

                                {
                                    currentch?.challengeStatus.status === 0 ?

                                        currentch?.includeStartDate === true && currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())) ?
                                            currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())).notes !== '' ?
                                                <div className="add_done_for_today">
                                                    <p> Task Marked & Notes Created for Today </p><img src={SmileIcon} alt="" />
                                                </div> :
                                                <div className="add_note_button">
                                                    <p>
                                                        Add a Note about Today
                                                    </p>
                                                    <button onClick={() => { setOPenNotePopup(true) }}> <img src={PenIcon} alt="" />Write here </button>
                                                </div>


                                            :

                                            currentch?.includeStartDate === false && getDate(currentch.startDate) === (getDate(new Date())) ?
                                                <></> :

                                                currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())) ?
                                                    currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())).notes !== '' ?
                                                        <div className="add_done_for_today">
                                                            <p> Task Marked & Notes Created for Today </p><img src={SmileIcon} alt="" />
                                                        </div> :
                                                        <div className="add_note_button">
                                                            <p>
                                                                Add a Note about Today
                                                            </p>
                                                            <button onClick={() => { setOPenNotePopup(true) }}> <img src={PenIcon} alt="" />Write here </button>
                                                        </div>
                                                    :
                                                    <div className="mark_today">
                                                        <p className="mark">Completed today's goals?</p>
                                                        <button onClick={() => {
                                                            dispatch(markDayAsCompleted(currentch?._id))
                                                        }}> <img src={TickIcon} alt="" /> Yeah, Done</button>
                                                    </div>

                                        :
                                        <div className={`message ${currentch?.challengeStatus.status === 1 ? "complted" : 'failed'}`}>
                                            <p className="message_text">
                                                {
                                                    currentch?.challengeStatus.status === 1 ? "Completed This Challenge" :
                                                        "You failed this Challenge"
                                                }
                                            </p>
                                        </div>

                                }

                            </div>
                        </div>

                        <div className="day_wise_map">
                            <p className="map_heading">
                                Here's your day wise task and their statuses
                            </p>
                            {
                                currentch?.challengeStatus.status === 0 ?
                                    <div className="today_status">
                                        <p className="status"> Status:
                                            {
                                                currentch?.includeStartDate === true && currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())) ?
                                                    " Completed" :
                                                    currentch?.includeStartDate === false && getDate(currentch.startDate) === (getDate(new Date()))
                                                        ? " Warm Up Day" :

                                                        currentch?.DayWisecompletedOn?.find((data) => getDate(data.date) === getDate(new Date())) ?
                                                            " Completed"
                                                            :
                                                            " Not Yet Completed"
                                            }

                                        </p>
                                        {
                                            currentch?.includeStartDate === false && getDate(currentch.startDate) === (getDate(new Date()))?
                                            <></>:
                                            showdetailed !== true ?
                                                <p className="show_detailed" onClick={() => {
                                                    dispatch({
                                                        type: "SHOW_DETAILED_DWC"
                                                    })
                                                }}> <img src={DetailedDWCIcon} alt="" /> Show Detailed</p>
                                                :
                                                <p className="show_detailed" onClick={() => {
                                                    dispatch({
                                                        type: "HIDE_DETAILED_DWC"
                                                    })
                                                }}> <img src={NormalDWCIcon} alt="" />Hide Detailed</p>

                                        }
                                    </div> :
                                    <div className='detailed_DWC'>
                                        {
                                            showdetailed !== true ?
                                                <p className="show_detailed" onClick={() => {
                                                    dispatch({
                                                        type: "SHOW_DETAILED_DWC"
                                                    })
                                                }}> <img src={DetailedDWCIcon} alt="" /> Show Detailed</p>
                                                :
                                                <p className="show_detailed" onClick={() => {
                                                    dispatch({
                                                        type: "HIDE_DETAILED_DWC"
                                                    })
                                                }}> <img src={NormalDWCIcon} alt="" />Hide Detailed</p>

                                        }
                                    </div>
                            }
                            <>
                                {
                                    showdetailed !== true ?
                                        <div className="maps">
                                            {
                                                Array.from({ length: currentch?.noOfdays }, (_, index) => {
                                                    const dayyy = currentch.includeStartDate === false ? currentch?.DayWisecompletedOn?.find((data) => data.dayNumber === index) : (
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
                                        :
                                        <div className="alldwcdata">
                                            <DetailedDWC challengeId={currentch._id} />


                                        </div>
                                }
                            </>
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

            <AddNotePopup open={openNotePopup} challengeId={currentch?._id} closePopup={() => { setOPenNotePopup(false) }} minimizePopup={() => { }} />

        </>
    )
}

export default ChallengeDashboard
