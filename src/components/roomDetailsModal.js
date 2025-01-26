import React from "react";
import "./roomDetailsModal.css"; // Ensure you have the corresponding CSS

const RoomDetailsModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="room-details-modal-overlay" onClick={onClose}>
      <div className="room-details-modal" onClick={(e) => e.stopPropagation()}>
        <div className="room-details-header">
          <h2>{room.name}</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="room-details-body">
          <img src={room.image} alt={room.name} className="room-details-image" />
          <div className="room-rate flex justify-between items-center space-x-4">
            <span><strong>₱{room.price}/night</strong></span>
            <span><strong>{room.person}</strong></span>
            <span><strong>{room.bed}</strong></span>
            <span><strong>{room.size}</strong></span>
            <span><strong>{room.availability}</strong></span>
          </div>
          <div className="room-details-info">
            <p>{room.description2}</p>
            <div className="room-amenities">
            <h4>Amenities:</h4>
            <ul className="grid grid-cols-3 gap-4 list-disc list-inside">
              {room.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
