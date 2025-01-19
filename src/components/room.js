import React, { useEffect } from 'react';
import './room.css';
import roomImage from '../assets/hotelroom.jpg';
import Footer from './footer';
import { Link } from 'react-scroll';
import RoomTab from './roomTab'; //

function Room() {
  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);

    const roomDetails = [
      { title: 'Standard Room', price: '3000', roomsAvailable: 3, bedCount: 1 },
      { title: 'Deluxe Room', price: '5000', roomsAvailable: 2, bedCount: 1 },
      { title: 'Suite', price: '7000', roomsAvailable: 1, bedCount: 2 },
      { title: 'Standard Room', price: '3000', roomsAvailable: 3, bedCount: 1 },
      { title: 'Deluxe Room', price: '5000', roomsAvailable: 2, bedCount: 1 },
      { title: 'Suite', price: '7000', roomsAvailable: 1, bedCount: 2 },
    ];
  
  return (
    <div>
      <div className='roomcontainer'>
        <div id='rooms'>
          <h1>Rooms and Suites</h1>
          <h3>Find your perfect escape with our stylish, comfortable rooms designed to suit every need. Relax, unwind, and enjoy your stay!</h3>
          <Link to="secondsection" smooth={true} duration={100} className="scroll-down-icon">
            <div className="arrow"></div>
          </Link>
        </div>
      </div>

      <div className="secondsection">
        <div className='room-home-header'>
          <h2>Find Your Ideal Stay</h2>
          <p>Pick a room that fits your taste.</p>
        </div>

        <div className="room-tab">
          {roomDetails.map((room, index) => (
            <RoomTab
              key={index}
              title={room.title}
              price={room.price}
              roomsAvailable={room.roomsAvailable}
              bedCount={room.bedCount}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Room;