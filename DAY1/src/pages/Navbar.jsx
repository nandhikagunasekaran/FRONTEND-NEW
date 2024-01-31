// Navbar.js
import React from 'react';
import '../assets/css/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/signin">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
