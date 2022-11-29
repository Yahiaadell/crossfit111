import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { Link } from "react-scroll";
// import VidTrial from "../../assets/CrossFit1.MP4"

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="main-vid">
        <video className="vid-trial" autoPlay loop muted>
         <source src="https://github.com/Yahiaadell/crossfit111/raw/Production/src/assets/CrossFit1.MP4" type="video/mp4"></source>
        </video>
       
        

        <div className="main-hero">
          <Header />
          <div className="hero-title">
            <div className="hero-maint">Failure is not an option! </div>
            <div className="hero-buttons">
                <Link to="join" spy={true} smooth={true}>
              <button  className="hero-btn">
                  Get Started
              </button>
                </Link>
                <Link to="about" spy={true} smooth={true}>
              <button className="hero-btn">
                  Learn More
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
