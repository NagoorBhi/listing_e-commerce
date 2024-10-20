// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="buttons">
        <Link to={`/thankyou/${product.name}`}>
          <button className="view-btn">View Product</button>
        </Link>
        <button onClick={() => onAddToCart(product)} className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
