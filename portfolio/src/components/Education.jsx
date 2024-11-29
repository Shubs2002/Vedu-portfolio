import React, { useEffect, useState, useRef } from "react";
import "../assets/styles/Education.css";

const educationData = [
  {
    title: "B Tech (COMPS) with Honors AIML",
    institution: "Vidyavardhini's College of Engineering And Technology",
    details: "CGPA: 7.72",
    year: "May 2025",
  },
  {
    title: "Diploma (COMPS)",
    institution: "VIVA College of Diploma Engineering & Technology",
    details: "Percentage: 85.54",
    year: "2019 - 2022",
  },
  {
    title: "SSC (10th)",
    institution: "National English High School",
    details: "Percentage: 65.80",
    year: "2019",
  },
];

const Education = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Trigger animation when the section is in view
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section id="education" className="education-section" ref={sectionRef}>
        <h2 className="section-title">Education</h2>
        <div className="loading-line-container">
          <div className={`loading-line ${animate ? "active" : ""}`}></div>
        </div>
        <div className="education-steps">
          <div className="timeline-container">
            <div className={`timeline-line ${animate ? "grow" : ""}`}>
              <div className="timeline-point"></div>
              <div className="timeline-point"></div>
              <div className="timeline-point"></div>
            </div>
          </div>
          {educationData.map((edu, index) => (
            <div
              className={`education-step ${animate ? "reveal" : ""}`}
              style={{ "--step-index": index }}
              key={index}
            >
              <div className="step-content">
                <h3 className="education-title">{edu.title}</h3>
                <p className="education-institution">{edu.institution}</p>
                {edu.details && (
                  <p className="education-details">{edu.details}</p>
                )}
                <p className="education-year">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
