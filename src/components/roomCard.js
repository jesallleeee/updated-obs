import React, { useState } from "react";
import RoomDetailsModal from "./roomDetailsModal"; // Import the modal
import "./roomCard.css";

const RoomCard = ({ room, onBook }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="room-card-select">
      <div className="room-card-image-select">
        <img src={room.image} alt={room.name} />
        <div className="room-amenities-select">
          {Array.isArray(room.amenities) && room.amenities.length > 0 &&
            room.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item-select">
                <img src={amenity.icon} alt={amenity.label} />
                <span>{amenity.label}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="room-card-content-select">
        <div className="room-card-header-select">
          <h3>{room.name}</h3>
          <span className="room-details-link-select" onClick={openModal}>
            Room Details
          </span>
        </div>
        <div className="room-details-summary-select">
          <span className="room-availability-select">{room.availability}</span> · 
          <span>{room.person}</span> · 
          <span>{room.bed}</span> 
        </div>
        <p className="room-description-select">{room.description}</p>
        <div className="horizontal-line-select"></div>
        <div className="room-card-footer-select">
          <div className="room-rate-select">
            <span className="rate-title-select">Flexible Rate with Breakfast</span>
            <span className="rate-price-select">
              {room.price} <small>PHP/NIGHT</small>
            </span>
          </div>
          <button className="book-button-select" onClick={onBook}>Book</button>
        </div>
      </div>

      {/* Room Details Modal */}
      {isModalOpen && <RoomDetailsModal room={room} onClose={closeModal} />}
    </div>
  );
};

export default RoomCard;
