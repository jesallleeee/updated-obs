import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./selectFacility.css";
import Navbar from "./navbar";

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

  const [checkIn, setCheckIn] = useState(location.state?.checkIn || getTodayDate());
  const [checkOut, setCheckOut] = useState(location.state?.checkOut || getTomorrowDate(getTodayDate()));
  const [persons, setPersons] = useState(location.state?.persons || 2);

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
      </div>
    </div>
  );
};

export default SelectFacility;