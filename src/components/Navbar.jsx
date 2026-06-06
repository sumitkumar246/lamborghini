import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <h2>TONINO</h2>
        <span>LAMBORGHINI</span>
      </div>

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/amenities" onClick={() => setOpen(false)}>Amenities</Link></li>
        <li><Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      <div className="nav-btn">
        <a href="/contact">Book Visit</a>
      </div>

    </nav>
  );
};

export default Navbar;