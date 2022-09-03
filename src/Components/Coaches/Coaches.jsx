import React, { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData'
import './Coaches.css'
import { motion } from 'framer-motion'

const Coaches = () => {
const transition = {type: "spring", duration: 3};
 const [selected] = useState(0);

  return (
    <div className="coaches" id="coaches">
     <div className="coaches-h">
Meet Our Coaches
     </div>
     <hr />
     <div className="coaches-text">
     Our coaches were selected to meet top tier requirements, and were chose depending on their experience, scientific knowledge and most importantly CrossFit background.
     </div>
     <div className="our-coaches">
     <div className="left-c">
      <span>Our Coaches</span>
      <motion.span
      key={selected}
      initial={{opacity: 0, x:100}}
      animate={{opacity: 1, x:0}}
      exit={{opacity:0, x:-100}}
      transition={{transition}}
      
      >
       {testimonialsData[selected].review}
      </motion.span>
      <span>
      <span className="coach-name">
       {testimonialsData[selected].name} 
      </span>
      {testimonialsData[selected].status}
      </span>
     </div>
     <div>
     <div className="right-c">
      <motion.div
      initial={{opacity: 0, x: -100}}
      transition={{ ...transition, duration:2}}
      whileInView={{opacity: 1, x:0}}

      ></motion.div>
      <motion.div
      initial={{opacity:0, x:100}}
      transition={{ ...transition, duration: 2}}
      whileInView={{opacity:1, x:0}}
      
      
      ></motion.div>
      <motion.img
      key={selected}
      initial={{opacity: 0, x:100}}
      animate={{opacity: 1, x:0}}
      exit={{opacity:0, x:-100}}
      transition={{transition}}
      src={testimonialsData[selected].image} alt="" />

      <div className="arrows">
       {/* <img 
       onClick={()=> selected===0?setSelected(tLength -1):
        setSelected((prev) => prev - 1)
       }
       src={leftArrow} alt="" />
       <img onClick={
       ()=> selected=== tLength - 1
       ?setSelected(0):
        setSelected((prev) => prev + 1)
       }
       src={rightArrow} alt="" /> */}
      </div>
     </div>
     </div>
     </div>
     </div>
  )
}

export default Coaches