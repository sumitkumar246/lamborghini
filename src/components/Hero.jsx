import React, { useState } from "react";
import BrochurePopup from "./BrochurePopup";
import "./Hero.css";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Tonino Lamborghini</h1>

        <p className="hero-text">
          Experience a premium lifestyle crafted with elegance, comfort and
          timeless design.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Book Enquiry
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Tonino+Lamborghini+Residences+Sector+71+SPR+Road+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="location-btn"
          >
            Location
          </a>

          <button
            className="btn-primary"
            onClick={() => setShowPopup(true)}
          >
            Download Brochure
          </button>
        </div>
      </div>

      {showPopup && (
        <BrochurePopup onClose={() => setShowPopup(false)} />
      )}
    </section>
  );
};

export default Hero;