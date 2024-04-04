import React, { useState } from 'react';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
const  Admin = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isOtpVerified,setIsOtpVerified]  =useState(false);
    const url = 'https://nandhini-tailors-back.onrender.com:5000';
 
  

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/authposts/submit-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail:email }),
      });

     console.log(response);
     if (response.ok===true){
        setIsEmailSent(true);  
     }
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}/authposts/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  userOTP:otp }),
      });

      console.log(response);
      if (response.ok===true){
        setIsOtpVerified(true);
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReset = () => {
 
    setEmail('');
    setOtp('');
    setIsEmailSent(false);
    setIsOtpVerified(false);
    
  };

  const [selectedTab, setSelectedTab] = useState('tab1');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    
  };



  return (
    <div className='body'>
      {!isEmailSent ? (
        <div className='boxEmail'>
        <form onSubmit={handleEmailSubmit} className='form'>
        <h1>E-mail verification</h1>
          <div class="block1">
          <div className='b2'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder='sample@gmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <button type="submit" id="btn" value="get OTP">Send Email</button>
          </div>
        </form>
        </div>
      ) : !isOtpVerified ? (
        <div className='boxOTP'>
        <form onSubmit={handleOtpSubmit} className='formOTP'>
        <h1>Enter your OTP  </h1>
            <div className="block2">
          <label htmlFor="otp"><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></label>
          <input
            type="text"
            id="otp"
            placeholder='Enter your otp'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          </div>
          <button type="submit" id="btn" value="Verify">Verify OTP</button>
        </form>
        </div>
      ) : (
        <div className="head">
        <header className='heading'>
          <div className="logo"><h1>Nandhini Tailors</h1></div>
          <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
            {sidebarVisible ? 'Slide Out' : 'Slide In'}
          </button>
        </header>
        <div className={`area ${sidebarVisible ? 'sidebar-visible' : ''}`}>
          <div className="sidebar">
            <button className={`sidebar-btn ${selectedTab === 'tab1' && 'active'}`} onClick={() => handleTabChange('tab1')}>baner</button>
            <button className={`sidebar-btn ${selectedTab === 'tab2' && 'active'}`} onClick={() => handleTabChange('tab2')}>home cursol</button>
            <button className={`sidebar-btn ${selectedTab === 'tab3' && 'active'}`} onClick={() => handleTabChange('tab3')}>about timeline</button>
            <button className={`sidebar-btn ${selectedTab === 'tab4' && 'active'}`} onClick={() => handleTabChange('tab4')}>product</button>
            <button className={`sidebar-btn ${selectedTab === 'tab5' && 'active'}`} onClick={() => handleTabChange('tab5')}>orders</button>
            <button className={`sidebar-btn ${selectedTab === 'tab6' && 'active'}`} onClick={() => handleTabChange('tab6')}>feedback</button>
            <button className="logout-btn" onClick={handleReset}>Logout</button>
          </div>
          <div className="content">
            {selectedTab === 'tab1' && <div>
            <h1>baner</h1>
                
            </div>}
            {selectedTab === 'tab2' && <div>
            <h1>home cursol</h1>
            </div>}
            {selectedTab === 'tab3' && <div>
            <h1>about timeline</h1>
            </div>}
            {selectedTab === 'tab4' && <div>
            <h1>product</h1>
            </div>}
            {selectedTab === 'tab5' && <div>
            <h1>orders</h1>
            </div>}
            {selectedTab === 'tab6' && <div>
            <h1>feedback</h1>
            </div>}
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Admin;
