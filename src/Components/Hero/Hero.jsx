import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { Link } from "react-scroll";
import CFvid from "../../assets/CrossFit1.MP4"

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="main-vid">
        <video className="vid-trial" src={CFvid} autoPlay loop muted />
        

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
