import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><p>home</p></Link></li>
        <li><Link to="/about"><p>about</p></Link></li>
        <li><Link to="/product"><p>product</p></Link></li>
        <li><Link to="/contact"><p>contact</p></Link></li>
      </ul>
    </nav>
  );
};


export default Navbar;
