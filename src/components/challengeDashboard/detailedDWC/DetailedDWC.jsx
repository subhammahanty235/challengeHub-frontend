import React, { useCallback, useEffect, useState } from 'react'
import './detailedDWC.scss'
import NoteIcon from '../../../assets/icons/notes-icon.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getDWCdata } from '../../../redux/actions/challengeActions'
import LoadingAnimation from '../../../assets/images/loading.svg'
const DetailedDWC = ({ challengeId }) => {
  // const [showDetailed, setShowDetailed] = useState(false);
  const [detailedDWC, setdetailedDWC] = useState(null);
  const dispatch = useDispatch();

  const getdwccallback = useCallback(() => {
    dispatch(getDWCdata(challengeId))
  }, [dispatch])
  useEffect(() => {
    getdwccallback();
  }, [getdwccallback])


  const { dwcloading, dwcData } = useSelector((state) => state.challenge);




  return (
    <div className='cont'>

      <div className={`left ${detailedDWC === null ? "nowidth-detailed" : ""}`}>
        <div className={`expanded_info ${detailedDWC?.dayStatus === 0 ? "failed" : ""} `}>
          <div className="header">
            <p className="date">
              {detailedDWC?.date}
            </p>
            <p className={`status ${detailedDWC?.dayStatus === 0 ? "failed" : "completed"}`}>{detailedDWC?.dayStatus === 0 ? "Failed" : "Completed"}</p>
          </div>
          <div className="expanded_info_body">
            <div className="failed">
              {
                detailedDWC?.dayStatus === 0 ?
                  <>
                    <p>Wanna cover those failures?</p>
                    <ul>
                      <li>Don't procastinate</li>
                      <li>Avoid distractions</li>
                      <li>remember each failure cost you something</li>
                    </ul>
                  </>
                  :
                  detailedDWC?.notes !== "" && detailedDWC?.notes !== null ?
                    <p className="note">{detailedDWC?.notes}</p>
                    :
                    <>
                      <p>Why you should write Notes?</p>
                      <ul>
                        <li>Helps you to keep track of what you have done.</li>
                        <li>Great way to remember your day</li>


                      </ul>
                    </>
              }


            </div>
          </div>
        </div>
      </div>
      {
        dwcloading === true ?
          <div className="loading"><img src={LoadingAnimation} alt="" /></div> :

          <div className={`right ${detailedDWC !== null ? "showwidthHalf" : "showwidthFull"}`}>
            {
              dwcData?.map((dwc) => {
                return <div className={`strips ${dwc.dayStatus === 0 ? "not_completed" : "completed"}`} onClick={() => {

                  setdetailedDWC(dwc)
                }}>
                  <div className="inner_strip">
                    <p className="date">{dwc?.date}</p>
                    {
                      dwc?.notes !== "" && dwc?.notes !== null ?
                        <div className="notesstatus">
                          <img src={NoteIcon} alt="" />
                        </div>
                        :
                        // <>yyyy</>
                        <></>


                    }

                  </div>
                </div>
              })
            }
            {/* <div className="strips completed" onClick={() => { setShowDetailed(!showDetailed) }}>
          <div className="inner_strip">
            <p className="date">19-10-2003</p>
            <div className="notesstatus">
              <img src={NoteIcon} alt="" />
            </div>
          </div>
        </div> */}
            {/* <div className="strips not_completed" onClick={() => { setShowDetailed(!showDetailed) }}>
          <div className="inner_strip">
            <p className="date">19-10-2003</p>
            
          </div>
        </div> */}
            {/* <div className="strips" onClick={() => { setShowDetailed(!showDetailed) }}>
          <div className="inner_strip">
            <p className="date">19-10-2003</p>
            
          </div>
        </div> */}

          </div>

      }

    </div>
  )
}

export default DetailedDWC