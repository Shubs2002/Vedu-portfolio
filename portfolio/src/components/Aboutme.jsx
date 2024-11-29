import React, { useEffect, useRef } from "react";
import "../assets/styles/AboutMe.css"; 
import flowerpot from '../assets/Images/flower.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import resume from '../assets/Files/vedikaResume.pdf';

const Aboutme = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.26 } // Trigger when 20% of the section is visible
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-aboutme">
      <div className="aboutmeimg">
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/vedika-sankhe-707700317/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="social-icons" />
          </a>
          <a href="mailto:vsankhe268@gmail.com">
            <EmailIcon className="social-icons" />
          </a>
        </div>
      </div>
      <div className="aboutme-details">
        <div className="internal-border-in-about-details">
          <h1>About Me</h1>
          <p className="aboutmetext">
            "I’m a motivated web developer with a passion for creating responsive,
            user-friendly interfaces and robust web solutions. I focus on enhancing
            user experiences, specializing in front-end development, and am currently
            expanding my expertise in AI and machine learning. I thrive in
            collaborative environments where I can apply my growing knowledge and
            technical abilities. With a commitment to continuous professional
            development, I stay updated with the latest web development trends and
            best practices, always eager to innovate and grow."
          </p>
          <div className="resume">
            <a href={resume} download="vedika's Resume.pdf">
              Resume
            </a>
          </div>
          <img src={flowerpot} alt="" className="flower-pot" />
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
