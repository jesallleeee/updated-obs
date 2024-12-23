import React from 'react';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg'
import Footer from './footer';
import './contact.css';

function Contact() {
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
      <div className='message'>
      <h2>Message Us</h2>
      <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" placeholder="e.g. John Becker" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="johnbecker@gmail.com" required />
            </div>
          </div>
          <div className="form-group message-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        </div>

      <div className='review'>
        <h2>What Customers Say About Us</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <img src={profile} alt="Customer 1" className="testimonial-image" />
            <h4>Fatima Taylor</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
          </div>
          <div className="testimonial-card">
            <img src={profile} alt="Customer 2" className="testimonial-image" />
            <h4>Fatima Taylor</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
          </div>
          <div className="testimonial-card">
            <img src={profile} alt="Customer 3" className="testimonial-image" />
            <h4>Fatima Taylor</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
          </div>
        </div>
        <div className="carousel-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </div>

    <Footer />
    </div>
  );
}

export default Contact;  