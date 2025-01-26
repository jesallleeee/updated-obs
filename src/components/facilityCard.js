import React from "react";
import "./facilityCard.css";

const FacilityCard = ({ facility, onBook }) => {
  return (
    <div className="facility-card-select">
      <div className="facility-card-image-select">
        <img src={facility.image} alt={facility.name} />
      </div>
      <div className="facility-card-content-select">
        <div className="facility-card-header-select">
            <h3>{facility.name}</h3>
        </div>
        <div className="facility-details-summary-select">
          <span className="facility-availability-select">{facility.availability}</span>
        </div>
        <p className="facility-description-select">{facility.description}</p>
        <div className="horizontal-line-select-faci"></div>
        <div className="facility-card-footer-select">
          <div className="facility-rate-select">
            <span className="facility-title-select">Book a pass per day!</span>
            <span className="facility-price-select">
              {facility.price} <small>PHP/PERSON</small>
            </span>
          </div>
          <button className="book-button-select-faci" onClick={onBook}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
                            