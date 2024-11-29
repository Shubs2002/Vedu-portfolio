import React, { useState, useEffect } from 'react';
import '../assets/styles/Home.css';
import Html from '../assets/Images/Html.webp';
import Css from '../assets/Images/Css.png';
import JS from '../assets/Images/JS.png';
import Figma from '../assets/Images/Figma.png';
import Canva from '../assets/Images/Canva.png';
import MongoDB from '../assets/Images/MongoDB.svg';
import Python from '../assets/Images/Python.png';
import Github from '../assets/Images/Github.svg';

const Home = () => {
  const TechStack = [Html, Css, JS, Figma, Canva, MongoDB, Python, Github];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % TechStack.length);
    }, 210);

    return () => clearInterval(interval);
  }, [TechStack.length]);

  return (
    <>
      <section id='home' className="section-home">
        <div className="sec-color-sec-in-home">
          <p className="name-in-home">
            Hey, it's <span className="primary-col-in-name">Vedika</span> 
          </p>
          <div className="main-designation-name">
            I'm a <span></span>
          </div>
          <div className="aboutme-home">A Web developer focused on responsive design, user-friendly interfaces, and expanding skills in AI. Committed to innovation and continuous learning.</div>
          <div className="designation">
            <p className="designation-name">Technology Stack</p>
            <div className="skill-set-logo">
              <img
                src={TechStack[currentLogoIndex]}
                alt={`Tech Logo ${currentLogoIndex}`}
                className="tech-logo"
              />
            </div>
          </div>

        </div>
        <div className="primarycol-section-in-home">
          <div className="person-Image-home"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
