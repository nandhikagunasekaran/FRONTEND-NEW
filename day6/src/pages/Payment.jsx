// src/components/PaymentForm.js
import React from 'react';
import '../assets/css/Payment.css';
import {Link} from 'react-router-dom';
const Payment = ({ totalAmount, onSubmit }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform payment processing logic here (mocked in this example)
      alert(`Payment successful! Total Amount: $${totalAmount}`);
      onSubmit();
    };
  
    return (
      <div className="payment-container">
        <h2>Payment Details</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    );
  };
  
  export default Payment;


