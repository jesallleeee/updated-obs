import React from 'react';
import { Link } from 'react-scroll';
import './facilities.css';
import luxuryRoomImage from '../assets/rooms.jpg'; 
import gym from '../assets/gym.jpg'; 
import spa from '../assets/spa.jpg'; 
import dining from '../assets/dining.png'; 
import Footer from './footer';

const Facilities = () => {
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
        <h2>Indulge in our top-tier Facilities</h2>
        
        <div className="luxury-room-section">
          <img src={luxuryRoomImage} alt="Luxurious Room" className="luxury-room-image" />
          <div className="luxury-room-text">
            <h3>Luxurious Rooms</h3>
            <p>
              Discover your perfect retreat at Elysian. Each of our thoughtfully designed rooms offers a 
              unique blend of comfort, style, and modern amenities to suit your needs. Whether you're 
              seeking cozy relaxation or indulgent luxury, we have the ideal space for your stay. Explore 
              our selection and find your home away from home.
            </p>
          </div>
        </div>

        <div className="gym-section">
          <div className="gym-text">
            <h3>Gym Center</h3>
            <p>
             Achieve your health and wellness goals in our state-of-the-art gym, equipped with
             modern machines and facilities. Whether you're into strength, training, cardio, 
             or yoga. Elysian Gym offers the perfect space to energize your body and mind.
            </p>
          </div>
          <img src={gym} alt="gym" className="gym-image" />
        </div>

        <div className="spa-section">
        <img src={spa} alt="spa" className="spa-image" />
          <div className="spa-text">
            <h3>Spa</h3>
            <p>
              Unwind with soothing treatments, luxurious theraphies, calming aromas,
              and expert care in a serene ambiance. Escape the stress of daily life and indulge
              in a holistic hourney that rejuvenates your mind, body, and spirit
              leaving you refreshed and renewed.
            </p>
          </div>
        </div>

        <div className="dining-section">
          <div className="dining-text">
            <h3>Fine Dining</h3>
            <p>
             Experience exquisite dining at Elysian's Fine Dining Restaurant,
             where exceptional cuisine, elegant ambiance, and impeccable service 
             come together for an unforgettable culinary journey. Indulge crafted dishes
             that elevate every moment of your dining experience.
            </p>
          </div>
          <img src={dining} alt="dining" className="dining-image" />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Facilities;