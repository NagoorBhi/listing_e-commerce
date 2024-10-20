// src/components/AddToCartModal.js
import React from 'react';

const AddToCartModal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add {product.name} to Cart?</h3>
        <p>Price: ${product.price}</p>
        <button onClick={onClose}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
