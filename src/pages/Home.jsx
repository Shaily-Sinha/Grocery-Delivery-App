import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';
import './Home.css';

const CATEGORY_CARDS = [
  { title: "Meat & Seafood", color: "#e8f5e9", icon: "🥩" }, // Light green/mint
  { title: "Bakery", color: "#fff3e0", icon: "🥖" }, // Light orange
  { title: "Frozen", color: "#fce4ec", icon: "🧊" }, // Light pink
  { title: "Vegetables", color: "#f1f8e9", icon: "🥦" }, // Pale green
  { title: "Dairy", color: "#e3f2fd", icon: "🥛" }  // Light blue
];

const Home = ({ onAddToCart, favorites = [], toggleFavorite }) => {
  // Extract unique categories for product grid
  const productCategories = [...new Set(PRODUCTS.map(p => p.category))];

  return (
    <div className="home-page">
      <HeroSection />
      
      {/* New Visual Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Categories</h2>
          <Link to="/shop" className="view-all-link">View All &gt;</Link>
        </div>
        
        <div className="categories-row">
          {CATEGORY_CARDS.map((cat, index) => (
            <Link to="/shop" key={index} className="category-card" style={{ backgroundColor: cat.color }}>
              <div className="category-icon">{cat.icon}</div>
              <span className="category-title">{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Grids */}
      {productCategories.map((category, index) => {
        const categoryProducts = PRODUCTS.filter(p => p.category === category);
        
        return (
          <section key={index} className="product-category-section" style={{ padding: '2rem 5%', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                {category}
              </h2>
            </div>
            
            <div className="product-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {categoryProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart}
                  isFavorite={favorites.includes(product.id)}
                  onToggleFavorite={() => toggleFavorite(product.id)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
