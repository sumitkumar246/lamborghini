import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">

        <div className="footer-top">

          <div className="footer-col">
            <h2 className="footer-logo">
              TONINO <span>LAMBORGHINI</span>
            </h2>

            <p>
              Experience a new standard of luxury living where
              elegance, comfort and timeless design come together.
            </p>

            <div className="footer-social">
              <a href="https://www.facebook.com/apinfragroup?mibextid=wwXIfr&mibextid=wwXIfr"><FaFacebookF /></a>
              <a href="https://www.instagram.com/ap_infra_group?igsh=NXJ2NGp2YnE3bDZu&utm_source=qr"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/ap-infra-group/"><FaLinkedinIn /></a>
         <a
  href="https://wa.me/917082003053?text=Hello%20I%20am%20interested%20in%20Tonino%20Luxury%20Residences"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Info</h3>

            <p>
              <FaMapMarkerAlt /> Gurgaon, Haryana
            </p>

            <p>
              <FaPhoneAlt /> +91  70820 03053
            </p>

            <p>
              <FaEnvelope /> info@toninoluxury.com
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Tonino Luxury Residences. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;