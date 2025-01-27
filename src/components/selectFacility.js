import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./selectFacility.css";
import Navbar from "./navbar";
import FacilityCard from "./facilityCard";
import SpaImage from '../assets/spa.jpg'; 

const SelectFacility = () => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getTomorrowDate = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const year = nextDay.getFullYear();
    const month = String(nextDay.getMonth() + 1).padStart(2, "0");
    const day = String(nextDay.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const location = useLocation();
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState(location.state?.checkIn || getTodayDate());
  const [checkOut, setCheckOut] = useState(location.state?.checkOut || getTomorrowDate(getTodayDate()));
  const [persons, setPersons] = useState(location.state?.persons || 2);

  const [facility, setFacility] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFacility([
        {
          id: 1,
          name: "Spa Massage",
          availability: "10:00AM - 4:00PM",
          description:
            "Indulge in a tranquil spa experience featuring soothing massages, aromatherapy, and personalized rejuvenation treatments designed to relax your mind and body.",
          price: "500",
          image: SpaImage,
        },
        {
          id: 2,
          name: "Gym Center",
          availability: "10:00AM - 4:00PM",
          description:
            "Maintain your fitness routine in our fully equipped gym, offering treadmills, free weights, resistance machines, and the option for personal training sessions with certified professionals.",
          price: "300",
          image: SpaImage,
        },
        {
          id: 3,
          name: "Infinity Pools",
          availability: "10:00AM - 4:00PM",
          description:
            "Sit and relax in our spa",
          price: "600",
          image: SpaImage,
        },
        {
          id: 4,
          name: "Conference Room",
          availability: "8:00AM - 5:00PM",
          description:
            "Sit and relax in our spa",
          price: "600",
          image: SpaImage,
        },
        {
          id: 5,
          name: "Unli Buffet",
          availability: "8:00AM - 6:00PM",
          description:
            "Sit and relax in our spa",
          price: "600",
          image: SpaImage,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleBookClick = (facilityOrRoom) => {
    navigate("/bookingForm", {
      state: {
        checkIn,
        checkOut,
        persons,
        roomOrFacility: {
          id: facilityOrRoom.id,
          name: facilityOrRoom.name,
          price: facilityOrRoom.price,
          description: facilityOrRoom.description,
          image: facilityOrRoom.image, // Assuming image is passed for visual reference
        },
      },
    });
  };  

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="loading">Loading rooms...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="selectFacility-container">
        <div className="sf-bg-select">
          <div className="details-container-select-faci">
            <div className="bookingpanel-select-faci">
              <div className="booking-item-select-faci">
                <span>
                  <i className="fa fa-calendar"></i> Check in
                </span>
                <input
                  type="date"
                  value={checkIn}
                  min={getTodayDate()}
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

              <div className="booking-item-select-faci">
                <span>
                  <i className="fa fa-calendar"></i> Check out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  min={getTomorrowDate(checkIn)}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>

              <div className="booking-item-select-faci">
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
            </div>
          </div>
        </div>

        <div className="book-facility-select">
          <div className="select-faci-text">Select a Facility</div>
          {facility.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              onBook={() => handleBookClick(facility)} // Pass room data when booking
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SelectFacility;