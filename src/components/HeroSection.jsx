import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero-background-circle"></div>
        
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span>Weekend Discount</span>
          </div>
          
          <h1 className="hero-title">
            All your <span className="text-yellow">grocery</span><br />
            needs here!
          </h1>
          
          <p className="hero-subtitle">
            We have prepared special discount for you on organic<br />
            breakfast products.
          </p>
          
          <div className="hero-actions">
            <Link to="/shop" className="btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
        
        <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800" 
            alt="Groceries" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
