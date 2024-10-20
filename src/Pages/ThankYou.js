// src/pages/ThankYou.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ThankYou = () => {
  const { productName } = useParams();
  return (
    <div className="thank-you">
      <h2>Thank you for your interest in {productName}!</h2>
    </div>
  );
};

export default ThankYou;



