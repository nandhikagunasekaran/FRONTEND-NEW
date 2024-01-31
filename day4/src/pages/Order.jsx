// OrderPage.jsx

import React, { useState } from 'react'//import '../assets/css/Order.css'; / Import the CSS file

const Order= ({ selectedGifts, totalAmount, onPaymentSubmit }) => {
  const [customerName, setCustomerName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = () => {
    // Your checkout logic here, you can validate inputs before proceeding
    if (customerName && shippingAddress && paymentMethod) {
      // You can proceed to payment or any other logic
      onPaymentSubmit({
        customerName,
        shippingAddress,
        paymentMethod,
        selectedGifts,
        totalAmount,
      });
    } else {
      alert('Please fill out all the fields.');
    }
  };

  return (
    <div className="order-page">
      <h1>Order Details</h1>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {selectedGifts.map((gift) => (
            <li key={gift.id}>
              {gift.name} - ${gift.price}
            </li>
          ))}
        </ul>
        <p>Total Amount: ${totalAmount}</p>
      </div>

      <div className="order-form">
        <h2>Order Form</h2>
        <form>
          <label>
            Customer Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </label>
          <label>
            Shipping Address:
            <textarea
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
            />
          </label>
          <label>
            Payment Method:
            <input
              type="text"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleCheckout}>
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
