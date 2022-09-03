import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import { Link } from "react-scroll";
import CrossFit6 from "../../assets/CrossFit6.JPG";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="main-vid">
        <img src={CrossFit6} alt="" className="vid-trial" />
        {/* <video className="vid-trial"src={VidTrial} autoPlay loop muted /> */}

        <div className="main-hero">
          <Header />
          <div className="hero-title">
            <div className="hero-maint">Failure is not an option! </div>
            <div className="hero-buttons">
              <button>
                <Link to="join" spy={true} smooth={true}>
                  Get Started
                </Link>
              </button>
              <button>
                <Link to="about" spy={true} smooth={true}>
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
