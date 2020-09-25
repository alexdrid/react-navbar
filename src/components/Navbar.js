import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaBars } from "react-icons/fa";
import { MdNavigation } from "react-icons/md";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <MdNavigation className="logo-icon" />
        Navbar
      </div>

      <div className="menu-container">
        <div className="menu-icon">
          <FaBars />
        </div>
        <Link to="/home" className="menu-item">
          Home
        </Link>
        <Link to="/about" className="menu-item">
          About
        </Link>
        <Link to="/services" className="menu-item">
          Services
        </Link>
      </div>
    </nav>
  );
};
