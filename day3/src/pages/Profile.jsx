// Profile.js
import React from 'react';
import '../assets/css/Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <div className="user-info">
      
        <div>
          <h3>John Doe</h3>
          <p>Email: john.doe@example.com</p>
          <p>Mobile number: 8610336643</p>
          {/* Add more user information as needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
