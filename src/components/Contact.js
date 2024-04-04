import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = (props) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send contact details to the server
    axios.post('https://nandhini-tailors-back.onrender.com:5000/verify', {
      contactDetails: customerDetails,
    })
      .then((response) => {
        console.log('Contact Details Sent Successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error Sending Contact Details:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  return (
    <section id="contact">
      <h2>Contact Details</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={customerDetails.name} onChange={handleInputChange} />

        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={customerDetails.phone} onChange={handleInputChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={customerDetails.email} onChange={handleInputChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={customerDetails.message} onChange={handleInputChange} />

        <button type="submit">Submit Order</button>
      </form>
    </section>
  );
};

export default Contact;
