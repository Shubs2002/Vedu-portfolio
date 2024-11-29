import React from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <footer className="footer-container">
     
        <p className="footer-text">----Copyrights © <span>{currentYear}</span> .All Rights Reserved.----</p>
     
    </footer>
    </>
  );
};

export default Footer;
