import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './facilities.css';
import luxuryRoomImage from '../assets/rooms.jpg'; 
import gym from '../assets/gym.jpg'; 
import spa from '../assets/spa.jpg'; 
import dining from '../assets/dining.png'; 
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const Facilities = () => {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);

    const navigate = useNavigate();

    const handleBookHereClick = () => {
      navigate('/selectFacility');
    };

  return (
    <div>
      <div className='facilities-container'>
        <div>
          <h1>Enjoy Our Facilities</h1>
          <h3>Indulge in our state-of-the-art amenities, including a luxurious spa, infinity pool, fitness center, gourmet dining, and elegant event spaces. Your comfort and satisfaction are our priority.</h3>
          <Link to="facilities-details" smooth={true} duration={100} className="scroll-down-icon">
          <div className="arrow"></div>
          </Link>
        </div>
      </div>

      <div id="facilities-details" className="facilities-details-section">
        <h2>Indulge in our Premium Facilities</h2>
        <p>Interested in our facilities?</p>
        <button className="book-here-link" onClick={handleBookHereClick}>
          Book here
        </button>
        <div className="facilities-grid">
        <div className="facility-item">
          <div className="facility-image">
            <img src={luxuryRoomImage} alt="Luxurious Rooms" />
          </div>
          <div className="facility-text">
            <h3>Luxurious Rooms</h3>
            <p>
            Discover your perfect retreat at Elysian. Each of our thoughtfully designed rooms offers a unique 
            blend of comfort, style, and modern amenities to suit your needs. Whether you’re seeking cozy 
            relaxation or indulgent luxury, we have the ideal space for your stay. Explore our selection and find your home away from home.
            </p>
          </div>
        </div>

        <div className="facility-item">
          <div className="facility-image">
            <img src={gym} alt="Gym Facility" />
          </div>
          <div className="facility-text">
            <h3>Gym center</h3>
            <p>
            Achieve your health and wellness goals in our state-of-the-art gym, equipped with modern machines and facilities. 
            Whether you're into strength training, cardio, or yoga, Elysian Gym offers the perfect space to energize your body and mind.
            </p>
          </div>
        </div>

        <div className="facility-item">
          <div className="facility-image">
            <img src={spa} alt="Relaxing Spa" />
          </div>
          <div className="facility-text">
            <h3>Relaxing Spa</h3>
            <p>
            Unwind with soothing treatments, luxurious therapies, calming aromas, and expert care in a serene ambiance.
            Escape the stress of daily life and indulge in a holistic journey that rejuvenates your mind, body, and spirit, 
            leaving you refreshed and renewed.
            </p>
          </div>
        </div>

        <div className="facility-item">
          <div className="facility-image">
            <img src={dining} alt="Relaxing Spa" />
          </div>
          <div className="facility-text">
            <h3>Fine Dining</h3>
            <p>
            Experience exquisite dining at Elysian’s Fine Dining Restaurant, where exceptional cuisine, elegant ambiance, and 
            impeccable service come together for an unforgettable culinary journey. Indulge in meticulously crafted dishes that 
            elevate every moment of your dining experience.
            </p>
          </div>
        </div>
         
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Facilities;