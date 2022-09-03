import React from 'react'
import './Footer.css'
import KAREEM from '../../assets/KAREEM.png'
import KAREEM2 from '../../assets/KAREEM2.png'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/Facebook-w.png'
import CrossFit from '../../assets/CrossFit9.png'
import { Link } from 'react-scroll'
import CrossFit2 from "../../assets/CrossFit2.png"

const Footer = () => {
  return (
    <div className="footer"id="footer">
     <div className="left-f">

<Link
    to='home'
    spy={true}
    smooth={true}>
    <img src={CrossFit2} alt="" className='footer-img'/>
    </Link>
     </div>
     <div className="mid-img">
     <div className="mid-f">
      <button>
      <div className="instagram">
      <a href="https://www.instagram.com/crossfit111_/?hl=en" target="_blank">
      <img src={Instagram} alt="" />
      </a>
      </div>
      </button>
      <button>
      <div className="facebook">
      <a href="https://facebook.com/" target='_blank'>
      <img src={Facebook} alt="" />
      </a>
      </div>
      </button>
      </div>

     </div>
     <div className="right-f">
      <div className="footer-text">
       Thank You for visiting CrossFit111, and looking forward to seeing you soon!
      </div>

     </div>
      
    </div>
  )
}

export default Footer