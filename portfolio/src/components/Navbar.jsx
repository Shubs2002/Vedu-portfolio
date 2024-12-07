import React, { useRef, useState, useEffect } from 'react';
import anime from 'animejs';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const spansRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = () => {
    anime({
      targets: spansRef.current,
      translateY: [-50, 0], // Move spans down from -50px to 0px
      opacity: [0, 1], // Fade in the spans
      delay: anime.stagger(130), // Apply staggered animation
      easing: 'easeOutExpo',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="NavBarSection" className={isScrolled ? 'scrolled' : ''}>
        <div className="logoname">Vedika&nbsp;<span className="primary-col-in-name">Sankhe</span></div>
        
        <div
          className="navbar-container-logo"
          onMouseEnter={handleMouseEnter}
        >
          <div className="navbar-component">
            {['Home', 'About', 'Education','Experience', 'Projects'].map((item, index) => (
               <a
               key={index}
               href={`#${item.toLowerCase()}`} // Set href to the section ID
               className={`nav-${item.toLowerCase()}`}
             >
              <span
                key={index}
                ref={(el) => (spansRef.current[index] = el)}
                className={`nav-${item.toLowerCase()}`}
              >
                {item}
              </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
