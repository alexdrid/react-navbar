import React from "react";
import "./Navbar.css";

const navMenuItems = ["Home", "About", "Services"];
export const Navbar = () => {
  return (
    <nav className="navbar">
      Navbar
      <input type='text' placeholder='Search'></input>
      <div className='menu-container'>
        {navMenuItems.map(item => 
          <li className="menu-item">{item}</li>
        )}
      </div>
    </nav>
  );
};
