import ContactForm from "../components/ContactForm";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-overlay"></div>

        <div className="contact-hero-content">
          <span>Get In Touch</span>
          <h1>Contact Us</h1>
          <p>
            Connect with our luxury property consultants for exclusive
            residences, private visits and premium investment guidance.
          </p>
        </div>
      </section>

      <section className="contact-details">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <FaMapMarkerAlt />
              <h3>Location</h3>
              <p>Gurgaon, Haryana</p>
            </div>

            <div className="contact-info-card">
              <FaPhoneAlt />
              <h3>Call Us</h3>
              <p>+91  70820 03053</p>
            </div>

            <div className="contact-info-card">
              <FaEnvelope />
              <h3>Email</h3>
              <p>info@toninoluxury.com</p>
            </div>

            <div className="contact-info-card">
              <FaClock />
              <h3>Visit Hours</h3>
              <p>Mon - Sun : 10 AM - 9 PM</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default Contact;