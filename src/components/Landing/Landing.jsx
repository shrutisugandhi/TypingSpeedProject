import React from "react";
import "./Landing.css";
import hero from "./../../assets/hero.png";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-left" data-aos="fade-right"> 
        {/*data-aos -> animation on scroll dependency for landing image */}

        <h1 className="landing-header">Can you type...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast", "Correct", "Quick"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img
          data-aos="fade-left"
          src={hero}
          alt="hero"
          className="landing-logo"
        ></img>
      </div>
    </div>
  );
};

export default Landing;
