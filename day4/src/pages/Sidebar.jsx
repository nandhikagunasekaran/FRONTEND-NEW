// Sidebar.js
import React, { useState } from 'react';
import '../assets/css/Sidebar.css';
import {Link} from 'react-router-dom';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      <ul className="sidebar-list">
      <li><Link to="/Profile">Profile</Link></li>
        
        <li><Link to="/Giftportal">Gift portal</Link></li>
     
        <li><Link to="/Payment">Payment</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

