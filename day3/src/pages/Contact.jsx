import React from 'react';
import '../assets/css/Contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, suggestions, or just want to say hello, feel free
        to reach out to us. We value your feedback and are here to assist you.
      </p>
      <div className="contact-info">
        <p>Email: contact@giftportal.com</p>
        <p>Phone: (555) 123-4567</p>
        {/* Add more contact information as needed */}
      </div>
      {/* Add a contact form or additional content as needed */}
    </div>
  );
}

export default Contact;
