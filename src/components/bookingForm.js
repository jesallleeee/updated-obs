import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./bookingForm.css";
import Navbar from "./navbar";

const BookingForm = () => {
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
  const [guestInfo, setGuestInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [checkIn, setCheckIn] = useState(location.state?.checkIn || getTodayDate());
  const [checkOut, setCheckOut] = useState(location.state?.checkOut || getTomorrowDate(getTodayDate()));
  const [persons, setPersons] = useState(location.state?.persons || 2);
  
  const [paymentMethod, setPaymentMethod] = React.useState("visa");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "firstName" || name === "lastName") {
      if (/^[a-zA-Z]*$/.test(value)) {
        setGuestInfo({ ...guestInfo, [name]: value });
      }
    } else if (name === "phone") {
      if (/^\d{0,11}$/.test(value)) {
        setGuestInfo({ ...guestInfo, [name]: value });
      }
    } else if (name === "email") {
      setGuestInfo({ ...guestInfo, [name]: value });
    } else if (name === "zipCode") {
      if (/^\d{0,5}$/.test(value)) {
        setGuestInfo({ ...guestInfo, [name]: value });
      }
    } else {
      setGuestInfo({ ...guestInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, city, zipCode } = guestInfo;

    if (!firstName || !lastName || !phone || !email || !address || !city || !zipCode) {
      alert("All fields marked with * are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (paymentMethod === "visa") {
      // Card number validation
      const cardNumber = document.querySelector('input[name="cardNumber"]').value;
      const expirationMonth = document.querySelector('input[name="expMonth"]').value;
      const expirationYear = document.querySelector('input[name="expYear"]').value;
      const cvv = document.querySelector('input[name="cvv"]').value;
      
      if (!/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
      }
      if (!/^\d{2}$/.test(expirationMonth) || !/^\d{4}$/.test(expirationYear)) {
        alert("Please enter a valid expiration date.");
        return;
      }
      if (!/^\d{3}$/.test(cvv)) {
        alert("Please enter a valid CVV.");
        return;
      }
    }

    console.log("Booking Information Submitted:", guestInfo);
    alert("Booking submitted successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="bookingForm-container">
        <div className="bf-bg">
          <div className="details-container-form">
            <div className="bookingpanel-form">
              <div className="booking-item-form">
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

              <div className="booking-item-form">
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

              <div className="booking-item-form">
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
        
        <div className="book-form">
          <div className="form-text">Complete Booking</div>
          <div className="info-container">
            <h3>Guest Information</h3>
            <div className="form-grid">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={guestInfo.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  maxLength="50"
                  required
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={guestInfo.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  maxLength="50"
                  required
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={guestInfo.phone}
                  onChange={handleInputChange}
                  placeholder="XXXX-XXX-XXXX"
                  maxLength="11"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={guestInfo.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  maxLength="100"
                  required
                />
              </div>
              <div>
                <label>Country</label>
                <select name="country" value={guestInfo.country} onChange={handleInputChange} required>
                  <option value="">Select Country</option>
                  {["Philippines", "USA", "Canada"].map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={guestInfo.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  maxLength="200"
                  required
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={guestInfo.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  maxLength="100"
                  required
                />
              </div>
              <div>
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={guestInfo.zipCode}
                  onChange={handleInputChange}
                  placeholder="XXXX"
                  maxLength="5"
                  required
                />
              </div>
            </div>
          </div>

          <div className="payment-container">
          <h3>Payment</h3>

          <div className="payment-method">
            <div className="payment-method-group">
              <input
                type="radio"
                id="visa"
                name="payment"
                checked={paymentMethod === "visa"}
                onChange={() => setPaymentMethod("visa")}
              />
              <label htmlFor="visa">Pay with VISA Card</label>
            </div>

            {paymentMethod === "visa" && (
              <div className="payment-grid">
                <div>
                  <label>Card Number</label>
                  <input 
                    type="text" 
                    name="cardNumber" 
                    placeholder="XXXX-XXXX-XXXX-XXXX" 
                  />
                </div>
                <div className="expiration-row">
                  <div>
                    <label>Expiration Month</label>
                    <select name="expMonth">
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Expiration Year</label>
                    <select name="expYear">
                      <option value="">Year</option>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = new Date().getFullYear() + i;
                        return (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div>
                  <label>Name on Card</label>
                  <input 
                    type="text"
                    name="nameOnCard" 
                    placeholder="Cardholder Name" 
                  />
                </div>
                <div>
                  <label>CVV</label>
                  <input 
                    type="text" 
                    name="cvv" 
                    placeholder="XXX" 
                  />
                </div>
              </div>
            )}
          </div>

          <div className="payment-method">
            <div className="payment-method-group">
              <input
                type="radio"
                id="gcash"
                name="payment"
                checked={paymentMethod === "gcash"}
                onChange={() => setPaymentMethod("gcash")}
              />
              <label htmlFor="gcash">Pay with GCash</label>
            </div>

            {paymentMethod === "gcash" && (
              <div className="gcash-inputs">
                <div>
                  <label>GCash Number</label>
                  <input 
                    type="text" 
                    name="gcashNumber" 
                    placeholder="XXXX-XXX-XXXX" 
                  />
                </div>
              </div>
            )}
          </div>
        </div>


          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;