// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faShoppingBag, faEnvelope, faPhone, faMapMarker, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className='foot'>
        <div className='page-link'>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Link>
          <Link to="/product">
            <FontAwesomeIcon icon={faShoppingBag} /> Product
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact
          </Link>
        </div>
        <div className='social-media'>
          <h2>social media</h2>
          <div className='icons'>
          <a href='#'className='face'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href='#'className='youtube'><FontAwesomeIcon icon={faYoutube} /></a>
          <a href='#' className='x'><FontAwesomeIcon icon={faX}/></a>
          <a href='#' className='insta'><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
        <div className='contact-detail'>
          <a href='mailto:nandhinivel79@gmail.com'> <FontAwesomeIcon icon={faPhone} /> Email Us</a>
          <a href='tel:9043667457'><FontAwesomeIcon icon={faEnvelope} /> Contact Us</a>
          <a href='https://maps.app.goo.gl/nn33tzWJNRduKXKQ8'><FontAwesomeIcon icon={faMapMarker}/> Location</a>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
