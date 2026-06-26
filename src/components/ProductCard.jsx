import React from 'react';
import { Plus, Heart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, isFavorite, onToggleFavorite }) => {
  const { name, price, originalPrice, image, weight, isOrganic, discount } = product;

  return (
    <div className="product-card glass-card">
      <div className="product-image-wrapper">
        {discount && (
          <div className="discount-badge">-{discount}%</div>
        )}
        {isOrganic && <span className="organic-badge">Organic</span>}
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite();
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={18} 
            fill={isFavorite ? "#ef4444" : "none"} 
            color={isFavorite ? "#ef4444" : "currentColor"} 
          />
        </button>
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{name}</h3>
        <div className="product-meta">
          <span className="product-weight">{weight}</span>
        </div>
        <div className="product-bottom">
          <div className="product-price">
            <span className="current-price">₹{price.toFixed(2)}</span>
            {originalPrice && (
              <span className="original-price">₹{originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button 
            className="add-to-cart-btn btn-primary"
            onClick={() => onAddToCart(product)}
            aria-label="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
