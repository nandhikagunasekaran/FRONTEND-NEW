import React from 'react';
import '../assets/css/GiftItems.css';
const GiftItem = ({ itemName, price }) => {
  return (
    <div className="gift-item">
      <h3>{itemName}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default GiftItem;