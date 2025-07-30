import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        {/* LEFT: Text section */}
        <div className="hero-left">
          <div className="hero-top">
            <h1 className="intro-text">
              I'm <span className="name-gradient">Isha Jadhav</span> <span className="wave">👋</span>
            </h1>
          </div>

          <div className="hero-content">
            <p>
              I'm a computer science student specializing in backend development with C, C++, and Java.
              I have experience in full-stack technologies and enjoy problem-solving, optimizing systems,
              and building scalable applications. Currently exploring the MERN stack, databases, and system
              architecture to enhance my development skills.
            </p>
            <a href="/finalresume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="hero-resume">My resume</button>
            </a>
          </div>
        </div>

        {/* RIGHT: Image section */}
        <div className="hero-right">
          <img src="/publicimages/profile.jpeg" alt="Isha Jadhav" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
