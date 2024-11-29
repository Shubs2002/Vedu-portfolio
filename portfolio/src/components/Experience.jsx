import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/Experience.css";

const experienceData = [
  {
    title: "FullStack Web Development Intern",
    details: [
      "Observed and learned from real-world projects and their development cycles.",
      "Enhanced skills in HTML, CSS, JavaScript, and basic front-end development.",
      "Learned how to work with version control systems like Git.",
    ],
    year: "June 2024 - November 2024",
  },
  {
    title: "Android App Development",
    details: [
      "Successfully completed an 8-week online certified training on Android App Development.",
      "Gained introduction to Android, World of Kotlin, Android Kick-Off, Higher Order Functions, and Final Project modules.",
    ],
    year: "June 2023 - July 2023",
  },
  {
    title: "Web Apps & Mobile Apps Development",
    details: [
      "Designed UI/UX for intuitive user experience.",
      "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS.",
    ],
    year: "June 2021 - August 2021",
  },
];

const Experience = () => {
  const [lineVisible, setLineVisible] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const itemRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.target === lineRef.current && entry.isIntersecting) {
            setLineVisible(true);
          } else if (entry.isIntersecting && !visibleIndexes.includes(index)) {
            setVisibleIndexes((prevIndexes) => [...prevIndexes, index]);
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is visible
    );

    if (lineRef.current) observer.observe(lineRef.current);
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [visibleIndexes]);

  return (
    <section id="experience" className="experience-container">
      <h2 className="experience-section-title">Experience</h2>
      <div
        ref={lineRef}
        className={`experience-loading-line-container ${
          lineVisible ? "visible" : ""
        }`}
      >
        <div className="experience-loading-line"></div>
      </div>
      <div className="experience-items">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`experience-item ${
              visibleIndexes.includes(index) ? "visible" : ""
            }`}
            data-index={index}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className="experience-content">
              <h3 className="experience-role">{exp.title}</h3>
              <ul className="experience-description">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <p className="experience-timeline">{exp.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
