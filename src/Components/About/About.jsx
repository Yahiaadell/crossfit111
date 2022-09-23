import React from 'react'
import './About.css'
import zoz from "../../assets/CrossFitVid.mp4"

const About = () => {
  return (
    <div className="about" id="about">
     <div className="about-h">
      About US
     </div>
     <hr />
     <div className="about-text">
      CrossFit can be used to accomplish any goal, from improved health to weight loss to better performance. From general fitness to sport-specific training, there is no better program out there. CrossFit111 is located at Madianty overlooking the pool and jaccuzi, which is a phenomenal view while training.
     </div>
     <video src={zoz} />
    </div>
  )
}

export default About