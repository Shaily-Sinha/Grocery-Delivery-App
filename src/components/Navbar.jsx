import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount, toggleCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <div className="navbar-wrapper">
      {/* Top Promotional Bar */}
      <div className="top-bar">
        <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in</p>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <span className="brand-text">fresh</span>
          </Link>

          {/* Search Area */}
          <div className="navbar-search-container">
            <form className="search-bar" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="navbar-right">
            <Link to="/favorites" className="nav-action-btn">
              <Heart size={20} className="action-icon" />
              <div className="action-text">
                <span className="action-label">Reorder</span>
                <span className="action-title">My Items</span>
              </div>
            </Link>

            <Link to="/login" className="nav-action-btn">
              <User size={20} className="action-icon" />
              <div className="action-text">
                <span className="action-label">Sign In</span>
                <span className="action-title">Account</span>
              </div>
            </Link>

            <button className="nav-action-btn cart-btn-container" onClick={toggleCart}>
              <div className="cart-icon-wrapper">
                <ShoppingCart size={22} className="action-icon" />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </div>
              <div className="action-text">
                <span className="action-label">Cart</span>
                <span className="action-title">₹{cartCount > 0 ? (cartCount * 60).toFixed(2) : "0.00"}</span>
              </div>
            </button>
          </div>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
