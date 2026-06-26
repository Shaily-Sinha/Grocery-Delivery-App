import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import './Favorites.css';

const Favorites = ({ onAddToCart, favorites, toggleFavorite }) => {
  // Get the actual product objects that match the favorited IDs
  const favoriteProducts = PRODUCTS.filter(product => favorites.includes(product.id));

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>My Items</h1>
        <p>Your saved groceries and regular reorders.</p>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="empty-favorites">
          <Heart size={64} className="empty-icon" />
          <h2>You haven't saved any items yet.</h2>
          <p>Click the heart icon on any product to save it here for quick reordering!</p>
          <Link to="/shop" className="btn-primary">Browse Shop</Link>
        </div>
      ) : (
        <div className="favorites-grid">
          {favoriteProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              isFavorite={true} // By definition, items here are favorited
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
