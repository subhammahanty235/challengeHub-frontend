import React, { useState } from 'react'
import './detailedProgressAccordian.scss'

const DetailedProgressesAccordian = () => {
    const [opened, setOpened] = useState(false);

    return (
        
        <div className='detailed_progress_accordian'>

            <div className="part">
                <div className="normal">
                    hhi4f4i
                    <p onClick={() => { setOpened(!opened) }}>View Notes</p>
                </div>


                <div className={`${opened === true ? 'part_opened' : 'part_closed'}`}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus quaerat quis odit tempore totam natus nihil obcaecati laudantium provident.</p>
                    {/* huf4jfkgjiukerjfh3efg3fhhdfhje */}
                </div>
            </div>


        </div>
    )
}

export default DetailedProgressesAccordian
