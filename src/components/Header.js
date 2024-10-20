// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search products..." className="search-bar" />
      <div className="icons">
        <i className="profile-icon">Profile</i>
        <i className="cart-icon">Cart</i>
      </div>
    </header>
  );
};

export default Header;
