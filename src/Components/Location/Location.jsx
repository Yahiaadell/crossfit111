import React from 'react'
import { Map } from '../Map/Map'
import './Location.css'
import GoldsCover from "../../assets/GoldsCover.jpg"

const Location = () => {
  return (
    <div className='Location' id="location">
     <div className="locatiso">
<div className="loc-h">
 <span className='location-h'>Location</span>
 </div>
 <hr />
 </div>
 <div className="sec-h">
 <div className='left-loc'>
 <Map/>
 </div>
 <div className="right-loc">
  <div className="overlay">
   <div className="loc-info">
    <span>
     Madinaty, </span>
    <span >Cairo, </span>
    <span>Egypt</span>
    <div className="loc-text">
Located optimally in Madinaty Open Air Mall, Cairo, and just 30 minutes away from Cairo International Airport
    </div>
    <div className="location-ica">
     <a href="https://www.google.com/maps/dir/Cairo+International+Airport+(CAI),+Sheraton+Al+Matar,+El+Nozha/Gold's+Gym,+4J5G%2B98,+Second+New+Cairo,+Cairo+Governorate+4770203/@30.0977834,31.4361654,12z/data=!3m1!5s0x882b60e8dbe0991f:0x72be84cc1b595328!4m13!4m12!1m5!1m1!1s0x145817082ea84f41:0xe065af2151e21386!2m2!1d31.3964454!2d30.1119554!1m5!1m1!1s0x14581d9b47c92485:0x435991f6b30a060!2m2!1d31.6258672!2d30.1084434" target="_blank">Directions from Cairo International Airport</a>
    </div>
    </div>



   </div>
  </div>
   </div>
 </div>


  )
}

export default Location