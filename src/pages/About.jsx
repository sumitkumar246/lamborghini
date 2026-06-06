import "./About.css";
import {
  FaCrown,
  FaGem,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span>About The Brand</span>
          <h1>Tonino Lamborghini</h1>
          <p>
            A signature address designed for people who desire elegance,
            exclusivity and world-class living.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container about-intro-grid">
          <div className="about-image">
            <img src="/images/image6.png" alt="Luxury Residence" />
          </div>

          <div className="about-text">
            <span className="about-subtitle">Luxury Beyond Ordinary</span>
            <h2>Crafted For A Refined Lifestyle</h2>

            <p>
              Tonino Luxury Residences brings together premium architecture,
              elegant interiors, curated amenities and a lifestyle inspired by
              global luxury standards.
            </p>

            <p>
              Every corner is designed with attention to detail, offering an
              exclusive living experience for modern families and elite
              homeowners.
            </p>

            <div className="about-stats">
              <div className="card1">
                <h3>25+</h3>
                <p>Luxury Amenities</p>
              </div>

              <div className="card2">
                <h3>5★</h3>
                <p>Lifestyle Experience</p>
              </div>

              <div className="card3">
                <h3>24x7</h3>
                <p>Premium Security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-section-head">
            <span>Why Choose Us</span>
            <h2>Where Luxury Meets Trust</h2>
          </div>

          <div className="about-value-grid">
            <div className="about-value-card">
              <FaCrown />
              <h3>Premium Lifestyle</h3>
              <p>
                Designed for those who appreciate comfort, elegance and elite
                living.
              </p>
            </div>

            <div className="about-value-card">
              <FaGem />
              <h3>Elegant Interiors</h3>
              <p>
                Sophisticated design with luxury finishes and premium detailing.
              </p>
            </div>

            <div className="about-value-card">
              <FaBuilding />
              <h3>Iconic Architecture</h3>
              <p>
                Modern structure with timeless style and grand visual appeal.
              </p>
            </div>

            <div className="about-value-card">
              <FaShieldAlt />
              <h3>Secure Living</h3>
              <p>
                Advanced safety systems with professional 24x7 surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;