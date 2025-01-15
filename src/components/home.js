import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './home.css';
import Footer from './footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import featureImage1 from "../assets/featureImage1.png";
import featureImage2 from "../assets/featureImage2.png";
import roomsimg1 from "../assets/roomss.jpg";
import facilitiesImg1 from "../assets/facilitiesImage1.png";
import facilitiesImg2 from "../assets/facilitiesImage2.png";
import facilitiesImg3 from "../assets/facilitiesImage3.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);

  const navigate = useNavigate(); // Initialize the navigate function

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getTomorrowDate = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const year = nextDay.getFullYear();
    const month = String(nextDay.getMonth() + 1).padStart(2, '0');
    const day = String(nextDay.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [checkIn, setCheckIn] = useState(getTodayDate());
  const [checkOut, setCheckOut] = useState(getTomorrowDate(getTodayDate()));
  const [persons, setPersons] = useState(2);

  const handleBookNow = () => {
    navigate('/selectRoom', { state: { checkIn, checkOut, persons } }); // Pass data via state
  };

  return (
    <div>
      <div className="homecontainer">
        <div className="home-text">Breath, Relax, Elysian</div>

        <div className="bookingpanel">
          <div className="booking-item">
            <span>
              <i className="fa fa-calendar"></i> Check in
            </span>
            <input
              type="date"
              value={checkIn}
              min={getTodayDate()} // Set minimum date to today
              onChange={(e) => {
                const newCheckIn = e.target.value;
                setCheckIn(newCheckIn);
                setCheckOut((prevCheckOut) =>
                  new Date(newCheckIn) >= new Date(prevCheckOut)
                    ? getTomorrowDate(newCheckIn)
                    : prevCheckOut
                );
              }}
            />
          </div>

          <div className="booking-item">
            <span>
              <i className="fa fa-calendar"></i> Check out
            </span>
            <input
              type="date"
              value={checkOut}
              min={getTomorrowDate(checkIn)} // Ensure check-out date is at least one day after the check-in date
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div className="booking-item">
            <span>
              <i className="fa fa-users"></i> Persons
            </span>
            <input
              type="number"
              value={persons}
              min="1"
              max="8"
              onChange={(e) => setPersons(e.target.value)}
            />
          </div>

          <button className="book-now-btn" onClick={handleBookNow}>
            Book now
          </button>
        </div>
      </div>

      <div className="welcome-section">
        <div className="welcomem">
          <div className="welcomeh"> Welcome to Elysian!</div>
          <hr className="welcome-divider" />
          <div className="welcomep">
            Experience the perfect blend of luxury, comfort, and tranquility at
            Elysian Hotel. Nestled in a haven of serene <br /> beauty, we invite
            you to unwind, rejuvenate, and create unforgettable memories.
          </div>
        </div>
        <div className="features-section">

          <div className="feature">
            <div className="feature-image">
            <img src={featureImage1} alt="Featured Image" className="feature-img" />
            </div>
            <div className="feature-content">
              <h2>World-class amenities</h2>
              <p>
                From world-class amenities to personalized services, we are dedicated to making your stay extraordinary.
              </p>
              <button className="feature-btn">I'm Interested</button>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-content">
              <h2>Relax and Enjoy</h2>
              <p>
                Whether you're here for a relaxing getaway, a business trip, or a special occasion, Elysian is your ultimate destination for unparalleled hospitality.
              </p>
              <button className="feature-btn">I'm Interested</button>
            </div>
            <div className="feature-image">
            <img src={featureImage2} alt="Featured Image" className="feature-img" />
          </div>
        </div>
      </div>
    </div>

          <div className="rooms-section">
            <div className="roomsm">
              <div className="roomsh">Explore Our Rooms</div>
              <hr className="rooms-divider" />
              <div className="roomsp">
              Discover your perfect retreat with our thoughtfully designed rooms, offering elegance, comfort, <br />and modern amenities to suit every traveler's needs.
              </div>
            </div>

            <div className="rooms-cards-sec">
              <div className="room-card-sec">
                <img src={roomsimg1} alt="Standard Room" className="room-image-sec" />
                <h3>Standard Room</h3>
                <p>A small room for solo travelers with a single bed and basic amenities like a bathroom and Wi-Fi.</p>
              </div>
              <div className="room-card-sec">
                <img src={roomsimg1} alt="Double Room" className="room-image-sec" />
                <h3>Double Room</h3>
                <p>A room for two with a double bed or twin beds and standard amenities like a bathroom and TV.</p>
              </div>
              <div className="room-card-sec">
                <img src={roomsimg1} alt="Suite" className="room-image-sec" />
                <h3>Suite</h3>
                <p>A spacious room with separate living and sleeping areas, offering premium amenities.</p>
              </div>
            </div>
          </div>
      <div className="facilities-section">
        <div className="facilities-m">
            <div className="facilities-h">Enjoy Our Facilities</div>
            <hr className="facilities-divider" />
            <div className="facilities-p">
            Luxurious rooms, a serene spa, sparkling pool, modern gym, and exquisite dining—<br /> everything for your perfect stay.
            </div>
        </div>
          <div className="facilities-images-home">
            <img src={facilitiesImg1}  alt="Spa" className="facility-image-home" />
            <img src={facilitiesImg2}  alt="Pool" className="facility-image-home" />
            <img src={facilitiesImg3}  alt="Dining" className="facility-image-home" />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;