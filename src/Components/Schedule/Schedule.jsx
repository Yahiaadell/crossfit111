import React from 'react'
import './Schedule.css'
import Sch from "../../assets/Sch.jpeg"


const Schedule = () => {
  return (
    <div className="schedule" id="schedule">
      <div className="hp">
     <div className="schedule-h">
      Schedule
     </div>
     <hr />
     </div>
     <div className="schedule-text">
      <img src={Sch} alt="" className='CrSche'/>
     </div>
    </div>
  )
}

export default Schedule