import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Shop.css';

const Shop = ({ onAddToCart, favorites = [], toggleFavorite }) => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync search query state if URL changes
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
    // If there's a search, we might want to default category back to 'All'
    if (searchParams.get('search')) {
      setSelectedCategory('All');
    }
  }, [searchParams]);
  
  // Extract unique categories and add "All" at the beginning
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  // Filter products based on selected category and search query
  let filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);
    
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      (p.name && p.name.toLowerCase().includes(searchQuery.toLowerCase())) || 
      (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop All Products</h1>
        <p>Browse our fresh selection and get it delivered in minutes.</p>
      </div>

      <div className="shop-container">
        {/* Sidebar Filters */}
        <aside className="shop-sidebar glass-card">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category}>
                <button 
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  <span className="category-count">
                    ({category === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === category).length})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Product Grid */}
        <main className="shop-main">
          <div className="shop-grid-header">
            <h2>
              {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Products`}
            </h2>
            <span className="results-count">Showing {filteredProducts.length} results</span>
          </div>

          <div className="shop-product-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
                isFavorite={favorites.includes(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products-found">
              <h3>No products found {searchQuery ? `matching "${searchQuery}"` : `in this category`}.</h3>
              {searchQuery && (
                <Link to="/shop" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
                  Clear Search
                </Link>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
