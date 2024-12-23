import React, { useState } from 'react';
import './selectRoom.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

const SelectRoom = () => {

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [checkIn, setCheckIn] = useState(getTodayDate());
  const [checkOut, setCheckOut] = useState(getTodayDate());
  const [persons, setPersons] = useState(2);

  const navigate = useNavigate();  // Initialize navigate

  const handleBookClick = () => {
    navigate('/bookingForm', { state: { checkIn, checkOut, persons } });
  };
  
  return (
    <div>
      <Navbar />
      <div className="selectRoom-container">
        <div className="sr-bg">
          <div className="details-container">
            <div className="bookingpanel">
              <div className="booking-item">
                <span>
                  <i className="fa fa-calendar"></i> Check in
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>

              <div className="booking-item">
                <span>
                  <i className="fa fa-calendar"></i> Check out
                </span>
                <input
                  type="date"
                  value={checkOut}
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
                  onChange={(e) => setPersons(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='book-room'>
        <div className="select-text">Select a Room</div>
        <div className="room-container">
          <h3>Room Type 1</h3>
          <p>Details about this room...</p>
          <button className="book-button" onClick={handleBookClick}>Book</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRoom;