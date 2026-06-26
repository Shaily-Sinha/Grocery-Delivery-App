import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <Link to="/" className="footer-brand">
            <span className="brand-text">fresh</span>
          </Link>
          <p className="footer-description">
            Your one-stop destination for the freshest organic groceries, delivered straight to your door in minutes.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">IG</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer-section">
          <h3 className="footer-heading">Categories</h3>
          <ul className="footer-links">
            <li><Link to="/shop">Fresh Fruits & Veggies</Link></li>
            <li><Link to="/shop">Dairy & Bakery</Link></li>
            <li><Link to="/shop">Snacks & Beverages</Link></li>
            <li><Link to="/shop">Meat & Seafood</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>123 Grocery St, Food City, FC 10001</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>support@freshgroceries.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} fresh Groceries. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
