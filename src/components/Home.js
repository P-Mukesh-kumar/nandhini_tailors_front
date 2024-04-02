// Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';
import tailor1 from './images/tailor-image1.jpg';
import tailor2 from './images/tailor-image2.jpg';
import tailor3 from './images/tailor-image3.jpg';
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [tailor1, tailor2, tailor3];
  const totalImages = images.length;

  useEffect(() => {
    // Set up an interval to switch images every 5 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [totalImages]);

  return (
    <section id="home" className="home-section">
      <div className="scroll-image">
        <img src={images[currentImageIndex]} alt={`Tailor ${currentImageIndex + 1}`} />
        <div className="text-overlay">
          <h1>Welcome to Our Tailor Shop</h1>
          <p>Quality Tailoring Services Just for You</p>
        </div>
      </div>
      <div className="catchy-words">
        <p>Custom Fit • Elegant Designs • Precision Stitching</p>
      </div>
    </section>
  );
};

export default Home;
