import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">BuyYourBike</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Models</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
