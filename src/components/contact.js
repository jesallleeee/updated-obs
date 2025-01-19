import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg'
import Footer from './footer';
import './contact.css';

function Contact() {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);
  
  return (
    <div>

    <div className='contactcontainer'>
        <div>
          <h1>Contact Us</h1>
          <h3>Were here to assist you! Reach out to Elysian for inquiries, reservations, or any assistance you need. Your satisfaction is our priority, and were just a message or call away.</h3>
          <Link to="message-review" smooth={true} duration={100} className="scroll-down-icon">
            <div className="arrow"></div>
          </Link>
        </div>
    </div>

    <div className='message-review'>
    <div className='contact-home-header'>
      <h2>Get In Touch With Us</h2>
      <p>We're here to help you with any questions or requests. Reach out to us today!</p>
    </div>
    <form className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input 
            type="text" 
            id="fullname" 
            name="fullname" 
            placeholder="e.g. John Becker" 
            required 
            pattern="[A-Za-z\s]+" // Allows only letters and spaces
            title="Only alphabetic characters and spaces are allowed" // Error message
            aria-label="Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="johnbecker@gmail.com" 
            required 
            aria-label="Email Address"
          />
        </div>
      </div>
      <div className="form-group message-group">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Your message here" 
          rows="5" 
          required 
          aria-label="Message"
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">Send Message</button>
    </form>

    </div>

    <Footer />
    </div>
  );
}

export default Contact;  