import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import CrossFit2 from "../../assets/CrossFit2.png"
import Bars from '../../assets/bars.png'
import { useState } from 'react'

const Header = () => {

  const mobile = window.innerWidth<= 768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  

  return (
   <div className="header">
    <Link
    to='home'
    spy={true}
    smooth={true}>
    <img src={CrossFit2} alt="" className="head-img"/>
    </Link>
    {(menuOpened=== false && mobile ===true)? (
      <div style={{backgroundColor: "var(--appColor)",
      padding: "0.5rem",
      borderRadius: "5px"}}
      
      onClick={()=> setMenuOpened(true)}
      >
        <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
      </div>
    ) : (
      <div>
  <nav>
     <ul className='nav-items'>
      <li>
        <Link
        onClick={()=> setMenuOpened(false)}
        to='about'
        spy={true}
        smooth={true}>About CrossFit 111</Link></li>
      <li>
        <Link 
        onClick={()=> setMenuOpened(false)}
        to='coaches'
        spy={true}
        smooth={true}>Meet our coaches</Link></li>
      <li>
        <Link onClick={()=> setMenuOpened(false)}
        to='schedule'
        spy={true}
        smooth={true}>Schedule</Link></li>
        <li> 
          <Link onClick={()=> setMenuOpened(false)}
          to='location'
          spy={true}
          smooth={true}>Location</Link>
        </li>
     </ul>
    </nav>
    </div>
    
    )}
    <button className="join-now">
      <Link
      to='join'
      spy={true}
      smooth={true}>
     Join Now</Link>
    </button>
    
    </div>
  )
}

export default Header