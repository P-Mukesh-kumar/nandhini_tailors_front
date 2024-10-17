import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css';

import shirt from "./images/shirt.jpg";
import pant from "./images/pant.jpg";
import blouse from "./images/blouse.jpg";
import chudidar from "./images/chudidar.jpg";

const images = { Blouse: blouse, Chudidar: chudidar, Shirt: shirt, Pant: pant };

const Product = () => {
  const [productData, setProductData] = useState([
    { id: 1, type: 'women', name: 'Blouse', price: 200, quantity: 0 },
    { id: 2, type: 'women', name: 'Chudidar', price: 300, quantity: 0 },
    { id: 3, type: 'men', name: 'Shirt', price: 350, quantity: 0 },
    { id: 4, type: 'men', name: 'Pant', price: 400, quantity: 0 },
  ]);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProductData = productData.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setProductData(updatedProductData);
  };

  const calculateTotalPrice = () => {
    return productData.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const [currentStep, setCurrentStep] = useState('productSelection');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
  });

  const handleCustomerInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({ ...customerDetails, [name]: value });
  };

  const handlePlaceOrder = async () => {
    const selectedProducts = productData.filter((product) => product.quantity > 0);

    try {
      // Send a request to save customer details and get the inserted customer document
      const customerResponse = await axios.post('https://nandhini-tailors-back.onrender.com/posts', {
        productDetails:selectedProducts,
       customerDetails,
      });

      const customerId = customerResponse.data._id;

      // If there are selected products, include order details
      if (selectedProducts.length > 0) {
        const orderDetails = selectedProducts.map((product) => ({
          ...product,
          _id: product.id,
        }));

        // Send email and save order details in MongoDB
        const response = await axios.post('https://nandhini-tailors-back.onrender.com/posts/send-email', {
          customerId,
          customerDetails,
          orderDetails,
          totalPrice: calculateTotalPrice(),
        });

        console.log('Order placed successfully:', response.data);
      }

      // Reset the customer details form
      setCustomerDetails({
        name: '',
        phone: '',
        email: '',
        date: '',
      });

      // Set the current step to 'orderPlaced'
      setCurrentStep('orderPlaced');

    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleBackToProductSelection = () => {
    setCurrentStep('productSelection');
  };
  const isQuantitySelected = productData.some((product) => product.quantity > 0);
  
  return (
    <section id="product" className="product-section">
      {currentStep === 'productSelection' ? (
        <>
          <h2>Product Selection</h2>
          <div className="product-grid">
            {productData.map((product) => (
              <div key={product.id} className={`product-item ${product.type}`}>
                <img className="product-image" src={images[product.name]} alt={product.name} />
                <div className="product-info">
                  <p>{product.name}</p>
                  <p>Price: &#8377;{product.price}</p>
                </div>
                <div className="quantity-buttons">
                  <button onClick={() => handleQuantityChange(product.id, Math.max(0, product.quantity - 1))}>-</button>
                  <p>Quantity: {product.quantity}</p>
                  <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-button">
            <button onClick={() => setCurrentStep('customerDetails')} disabled={!isQuantitySelected}>
              Order
            </button>
          </div>
        </>
      ) : currentStep === 'customerDetails' ? (
        <div className="customer-details-form">
          <h2>Customer Details</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" value={customerDetails.name} onChange={handleCustomerInputChange} />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" value={customerDetails.phone} onChange={handleCustomerInputChange} />
            </label>
            <label>
              Email:
              <input type="text" name="email" value={customerDetails.email} onChange={handleCustomerInputChange} />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={customerDetails.date} onChange={handleCustomerInputChange} />
            </label>
            <div className="form-buttons">
              <button type="button" onClick={handleBackToProductSelection}>
                Back to Product Selection
              </button>
              <button type="button" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="order-placed-section">
          <h2>Order Placed Successfully!</h2>
          <Link to="/">
            <button>
              Back to Home
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Product;
