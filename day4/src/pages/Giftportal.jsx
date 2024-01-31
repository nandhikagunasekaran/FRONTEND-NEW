// GiftPortal.jsx

import React, { useState } from 'react';
import GiftList from './GiftList'; // Assuming you have a GiftList component
import '../assets/css/GiftPortal.css'; // Import the CSS file

const GiftPortal = () => {
  const initialGifts = [
    { id: 1, name: 'Chocolate Box', price: 20 },
    { id: 2, name: 'Flower Bouquet', price: 30 },
    { id: 3, name: 'Custom Mug', price: 15 },
    { id: 4, name: 'Gift Card', price: 25 },
    // Add more gift items as needed
  ];

  const [gifts, setGifts] = useState(initialGifts);
  const [selectedGifts, setSelectedGifts] = useState([]);

  const handleGiftSelection = (giftId) => {
    const selectedGift = gifts.find((item) => item.id === giftId);

    // Update the selectedGifts array with the new selection
    setSelectedGifts((prevSelectedGifts) => [...prevSelectedGifts, selectedGift]);
  };

  const handleRemoveGift = (giftId) => {
    // Remove the selected gift based on its id
    setSelectedGifts((prevSelectedGifts) => prevSelectedGifts.filter((item) => item.id !== giftId));
  };

  return (
    <div className="gift-portal">
      <h1>Welcome to the Gift Portal</h1>
      <GiftList
        giftItems={gifts}
        onGiftSelect={handleGiftSelection}
        onRemoveGift={handleRemoveGift}
        selectedGifts={selectedGifts}
      />

      {selectedGifts.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {selectedGifts.map((gift) => (
              <li key={gift.id}>
                {gift.name} - ${gift.price}
                <button onClick={() => handleRemoveGift(gift.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GiftPortal;
