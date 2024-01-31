// GiftList.jsx

import React from 'react';

const GiftList = ({ giftItems, onGiftSelect, onRemoveGift, selectedGifts }) => {
  return (
    <div className="gift-list">
      <h2>Gifts</h2>
      <ul>
        {giftItems.map((gift) => (
          <li key={gift.id}>
            {gift.name} - ${gift.price}
            <button onClick={() => onGiftSelect(gift.id)}>Add to Order</button>
            {selectedGifts.find((selectedGift) => selectedGift.id === gift.id) && (
              <button onClick={() => onRemoveGift(gift.id)}>Remove from Order</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;
