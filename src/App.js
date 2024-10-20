// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import Header component
import ProductList from './Pages/ProductList';  // Ensure correct path
import ThankYou from './Pages/ThankYou';  // Ensure correct path

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />  {/* Correct path */}
        <Route path="/thankyou/:productName" element={<ThankYou />} />  {/* Correct path */}
      </Routes>
    </Router>
  );
}

export default App;
