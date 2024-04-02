// About.js
import React from 'react';
import './About.css';
import tailorImage from './images/shirt.jpg'
import ownerImage from './images/owner.jpg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="description">
          <div className="left-description">
            <h2>Welcome to</h2>
            <h1>Nandhini Tailors</h1>
            <p>Quality tailoring services to enhance your style.</p>
          </div>
          <div className="right-description">
            <img src={tailorImage} alt="Tailor" className="image" />
          </div>
        </div>
      </div>
      <div className="mission-vision-container">
        <div className="mission-card card">
          <div className="card-content">
            <h3>Mission</h3>
            <p>We are dedicated to providing impeccable tailoring services that exceed customer expectations.</p>
          </div>
        </div>
        <div className="vision-card card">
          <div className="card-content">
            <h3>Vision</h3>
            <p>To be the premier destination for exceptional tailoring, known for craftsmanship and customer satisfaction.</p>
          </div>
        </div>
      </div>
      <div className="owner-details">
        <div className="owner-image">
          <img src={ownerImage} alt="Owner" className="owner-img" />
        </div>
        <div className="vertical-line"></div>
        <div className="owner-info">
          <h3>Meet the Owner</h3>
          <p>Name: N. Palani Vel</p>
          <p>Experience: Over 30 years</p>
          <p>Location: Moolakadai, Chennai</p>
        </div>
      </div>
      <div className="timeline">
        <h1>timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #f9f9f9' }}
            date="1990s"
            iconStyle={{ background: '#28a745', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Started career in tailoring</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #f9f9f9' }}
            date="2000"
            iconStyle={{ background: '#28a745', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Began home-based tailoring services</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #f9f9f9' }}
            date="2009"
            iconStyle={{ background: '#28a745', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">establish his new shop the history of nandhini tailors began</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f9f9f9', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid #f9f9f9' }}
            date="present"
            iconStyle={{ background: '#28a745', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">successful tailor</h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default About;
