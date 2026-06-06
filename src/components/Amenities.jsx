import React from "react";
import "./Amenities.css";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaShieldAlt,
  FaTree,
  FaBuilding,
  FaCocktail,
} from "react-icons/fa";

const Amenities = () => {
  const amenities = [
    {
      icon: <FaBuilding />,
      title: "Luxury Clubhouse",
      desc: "Exclusive clubhouse with premium lounge and entertainment spaces.",
    },
    {
      icon: <FaSwimmingPool />,
      title: "Infinity Pool",
      desc: "Resort-style infinity pool with breathtaking skyline views.",
    },
    {
      icon: <FaCocktail />,
      title: "Sky Lounge",
      desc: "Elegant rooftop lounge designed for luxury gatherings.",
    },
    {
      icon: <FaDumbbell />,
      title: "Fitness Center",
      desc: "State-of-the-art gym equipped with modern wellness facilities.",
    },
    {
      icon: <FaTree />,
      title: "Landscaped Gardens",
      desc: "Beautiful green spaces crafted for peaceful living.",
    },
    {
      icon: <FaShieldAlt />,
      title: "24x7 Security",
      desc: "Advanced surveillance and professional security services.",
    },
  ];

  return (
    <section className="amenities-section" id="amenities">
      <div className="container">

        <div className="section-header">
          <span className="subtitle">Luxury Lifestyle</span>

          <h2 className="section-title">
            World Class Amenities
          </h2>

          <p className="section-description">
            Designed to deliver an unmatched living experience with
            luxury, comfort and sophistication.
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((item, index) => (
            <div className="amenity-card" key={index}>
              <div className="amenity-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Amenities;