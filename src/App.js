// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer1 from './components/Footer1';
import Admin from './components/Admin';
import './App.css';
import Test from './components/Test';

const App = () => {
  // Check if the current route is the admin page
  const isOnAdminPage = window.location.pathname.startsWith('/admin');
  const isTest = window.location.pathname.startsWith('/test');

  return (
    <div className="app">
      {/* Conditionally render header based on route */}
      {!isOnAdminPage && !isTest && (
        <header>
          <h1>Nandhini Tailors</h1>
          <hr />
          <Navbar />
        </header>
      )}
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<Test/>} />
        {/* Add other routes as needed */}
      </Routes>

      {/* Conditionally render footer based on route */}
      {!isOnAdminPage && !isTest && <Footer1 />}
    
    </div>
  );
};

export default App;
