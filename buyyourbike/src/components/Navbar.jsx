import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/" className="logo-link">BuyYourBike</Link>
      </h2>
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/models" className="nav-item">Models</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
