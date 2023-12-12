import React, { useState } from 'react'
import './detailedDWC.scss'

const DetailedDWC = () => {
  const [showDetailed, setShowDetailed] = useState(false);


  return (
    <div className='cont'>

      <div className={`left ${showDetailed === false ? "nowidth-detailed" : ""}`}>
        <div className="expanded_info failed ">
          <div className="header">
            <p className="date">
            19-10-2003
            </p>
            <p className="status completed">Failed</p>
          </div>

          <div className="expanded_info_body">
              <div className="failed">
                <p>Wanna cover those failures?</p>
                <ul>
                  <li>Don't procastinate</li>
                  <li>Avoid distractions</li>
                  <li>remember each failure cost you something</li>
                </ul>
              </div>
          </div>

        </div>
        {/* shjhkd */}
      </div>
      <div className={`right ${showDetailed === true ? "showwidthHalf" : "showwidthFull"}`}>
        <div className="strips completed" onClick={() => { setShowDetailed(!showDetailed) }}>
          <div className="inner_strip">
            <p className="date">19-10-2003</p>
            <p className="notes">No Notoes</p>
          </div>
        </div>
        <div className="strips not_completed" onClick={() => { setShowDetailed(!showDetailed) }}>
          e
        </div>
        <div className="strips" onClick={() => { setShowDetailed(!showDetailed) }}>
          x
        </div>

      </div>

    </div>
  )
}

export default DetailedDWC