import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './home.css';
import Footer from './footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
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
      </div>

      <div className="rooms-section"></div>
      <div className="facilities-section"></div>
      <Footer />
    </div>
  );
}

export default Home;