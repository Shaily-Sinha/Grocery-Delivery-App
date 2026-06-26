import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './Checkout.css';

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 50; // Mock delivery fee
  const orderTotal = cartTotal + (cartTotal > 0 ? deliveryFee : 0);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit_card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    
    // Simulate API call and successful order placement
    setIsOrderPlaced(true);
    clearCart();
  };

  if (isOrderPlaced) {
    return (
      <div className="checkout-success-container">
        <div className="success-card">
          <CheckCircle size={64} className="success-icon" />
          <h2>Order Placed Successfully!</h2>
          <p>Thank you, {formData.fullName}. Your delicious groceries will arrive soon.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="checkout-container">
        {/* Left Column: Form */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit} className="checkout-form glass-card">
            <h3>Shipping Information</h3>
            
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="fullName" 
                required 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label>Delivery Address</label>
              <input 
                type="text" 
                name="address" 
                required 
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St, Apt 4B"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input 
                  type="text" 
                  name="city" 
                  required 
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="New York"
                />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input 
                  type="text" 
                  name="zipCode" 
                  required 
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="10001"
                />
              </div>
            </div>

            <h3 className="payment-heading">Payment Method</h3>
            <div className="payment-options">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="credit_card"
                  checked={formData.paymentMethod === 'credit_card'}
                  onChange={handleChange}
                />
                Credit / Debit Card
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-primary place-order-btn"
              disabled={cartItems.length === 0}
            >
              Place Order (₹{orderTotal.toFixed(2)})
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="checkout-summary-section">
          <div className="summary-card glass-card">
            <h3>Order Summary</h3>
            
            {cartItems.length === 0 ? (
              <p className="empty-cart-msg">Your cart is empty.</p>
            ) : (
              <>
                <div className="summary-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="summary-item">
                      <div className="summary-item-info">
                        <span className="item-qty">{item.quantity}x</span>
                        <span className="item-name">{item.name}</span>
                      </div>
                      <span className="item-price">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="summary-totals">
                  <div className="totals-row">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="totals-row">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="totals-row grand-total">
                    <span>Total</span>
                    <span>₹{orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
