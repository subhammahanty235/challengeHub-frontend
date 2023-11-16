import React from 'react'
import './challengeDashboard.scss'
import { useSelector } from 'react-redux'

const ChallengeDashboard = () => {
    const {currentch} = useSelector((state) => state.challenge)

    const sampleData = [
        {
            date:"7th jan",
            dayNumber:1,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:2,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:3,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:4,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:5,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:6,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:7,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:8,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:9,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:10,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:11,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:12,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:10,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:11,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:12,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:13,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:14,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:15,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:16,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:17,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:18,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:19,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:20,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:21,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:22,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:23,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:24,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:25,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:26,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:27,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:28,
            status:true
        },
        {
            date:"7th jan",
            dayNumber:29,
            status:false
        },
        {
            date:"7th jan",
            dayNumber:30,
            status:false
        },

    ]
  return (
    <div className="challenge_dashboard">
        <div className="challenge_datails">
            <p className="challenge_name">{currentch?.name}</p>
            <p className="challenge_desc">{currentch?.description}</p>
            
            <div className="dates">
                <p className="start_date">Started on: {currentch?.startDate}</p>
                <p className="expectedEnd">Expected Deadline: {currentch?.expectedEnd}</p>
            </div>

            <div className="currentPerformance">
                <p>Current Performance Score: <span>75</span> </p>
            </div>

            {/* <div className="score_warning">
                <p>*Please try to maintain a good score, good score means at least 80. score less than 40 means you are failed and as soon as your score reach 40, the challenge will be automatically marked as failed</p>
            </div> */}

            <div className="mark_today">
                <p className="mark">Completed today's goals?</p>
                <button>Yeah, Done!</button>
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
                   Array.from({length:75} , (_, index) => {
                    const dayyy = currentch?.DayWisecompletedOn?.find((data) => data.dayNumber === index+1);
                    if(!dayyy){
                        return <div className={`map`}> 
                    </div>
                    }else{
                        return <div className={`map ${dayyy.status === true ? 'completed' :''}`}>
                        </div>
                    }
                   })
                    // sampleData.map((item)=>{

                    //     return <div className={`map ${item.status === true ? 'completed' :''}`}>

                    //     </div>
                    // })
                }
            </div>
        </div>
    </div>
  )
}

export default ChallengeDashboard
