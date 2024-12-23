import React from 'react';
import './room.css';
import roomImage from '../assets/hotelroom.jpg';
import Footer from './footer';
import { Link } from 'react-scroll';

function Room() {
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

      {/* Second Section - Room Grid */}
      <div className="secondsection">
        <div className="room-cards">
          <div className="room-card">
          <img src={roomImage} alt="Room" />
            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>

          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={roomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={roomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={roomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={roomImage} alt="Room" />
            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          {/* Repeat room-card for other rooms */}
          <div className="room-card">
          <img src={roomImage} alt="Room" />

            <div className="card-details">
              <h3>Standard Room</h3>
              <p>₱3000 / night</p>
              <p>3 rooms available | 1 bed</p>
              <div className="card-actions">
                <button className="room-details">Room Details</button>
                <button className="book-now">Book Now</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    <div>
    <Footer />
    </div>

</div>

    
  );
}

export default Room;