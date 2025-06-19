import React from 'react';
import './CSS/Hero.css';
import { assets } from '../assets/assets'; 
const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-container">
          <video
        className="hero-video-background"
        autoPlay
        muted
        loop
        playsInline
        src={assets.hero_background_video}
      />
      <div className="hero-content">

        <div className="hero-left">
          
          <h1>Business Bay Consultancy</h1>
          <p>Your Trusted Partner for Business Setup & PRO Services in the UAE</p>

          <button className="hero-button">
            Start Your Business Today For <span className="hero-button-hilight">
               AED 5,999
            </span>
          </button>
        </div>


        <div className="hero-right">

        </div>
        
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
