import React, { useState } from 'react';
import roomImage from '../assets/hotelroom.jpg';
import './roomTab.css';

const RoomTab = ({ title, price, roomsAvailable, bedCount }) => {

  return (
    <div className="room-card-tab">
      <img src={roomImage} alt="Room" className="room-image-tab" />
      <div className="card-details-tab">
        <div className="room-title-price-container">
          <h3 className="room-title-tab">{title}</h3>
          <p className="room-price-tab">₱{price}/night</p>
        </div>
        <p className="room-info-tab">
          <span className="rooms-available-tab">{roomsAvailable} rooms available</span> ·{' '}
          <span className="bed-count-tab">{bedCount} bed</span>
        </p>
      </div>
    </div>
  );
};

export default RoomTab;
