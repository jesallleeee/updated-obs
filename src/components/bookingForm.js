import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./bookingForm.css";
import Navbar from "./navbar";
import roomImageCheck from "../assets/roomss.jpg";
import LogInModal from "./logInModal";

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
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isModalVisible, setModalVisible] = useState(!isLoggedIn); 
  const { name, price, image, details } = location.state || {};
  const { roomOrFacility } = location.state || {};

  if (!roomOrFacility) {
    return;
  }

  const closeModal = () => {
    setModalVisible(false);
  }; 

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
  
    // Check if the user is logged in
    if (!isLoggedIn) {
      alert("Please log in to proceed with your booking.");
      setModalVisible(true);
      return;
    }
  
    // Destructure guest information fields
    const { firstName, lastName, phone, email, address, city, zipCode } = guestInfo;
  
    // Validate guest information fields
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
      {!isLoggedIn && (
        <LogInModal isVisible={isModalVisible} onClose={closeModal}>
          <h2>Welcome to Our Booking Page!</h2>
          <p>Please log in to continue your booking.</p>
          <button
            className="login-button"
            onClick={() => {
              setIsLoggedIn(true);
              setModalVisible(false);
            }}
          >
            Log In
          </button>
        </LogInModal>
      )}
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
          <div className="row-container">
          <div className="info-container">
            <h3>Guest Information</h3>
            <p>Please fill us these Information to finish booking</p>
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
            </div>
          </div>
          <div class="booking-card">
            <div class="card-content">
              <img
                src={roomOrFacility.image}
                alt={roomOrFacility.name}
                className="booking-image"
              />
              <div className="room-rate-card">
                <span className="room-title-card">{roomOrFacility.name}</span>
                <span className="room-price-card">{roomOrFacility.price} PHP</span>
              </div>
              <p class="room-details-card">
                {checkIn} - {checkOut}<br />{persons} persons
              </p>
              <div class="charges-card">
                <div class="charge-item-card">
                  <span>Taxes and Fees</span>
                  <span>1,500</span>
                </div>
                <div class="charge-item-card">
                  <span>Service Charge</span>
                  <span>500</span>
                </div>
              </div>
              <hr />
              <div class="total-card">
                <span>Total</span>
                <span>6,500</span>
              </div>
              <p class="subtotal-card">PHP Subtotal</p>
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
                    maxLength="16"
                    inputMode="numeric"
                    pattern="\d*"
                    onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                    required
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
                    maxLength="50"
                    pattern="^[a-zA-Z\s]*$" // Allows only alphabets and spaces
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                    required
                  />
                </div>
                <div>
                  <label>CVV</label>
                  <input 
                    type="text" 
                    name="cvv" 
                    placeholder="XXX"
                    maxLength="3"
                    inputMode="numeric"
                    pattern="\d*"
                    onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                    required
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
                    maxLength="11"
                    inputMode="numeric"
                    pattern="\d*"
                    onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                    required 
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="rules-container">
        <h3>Kids Stay Free</h3>
        <p>A maximum of 2 children aged 12 and below stay free of charge per room if they share the same bed with adults.</p>
        <h3>Cancellation Policy</h3>
        <p>Cancellations must be made at least 24 hours before the scheduled check-in time (typically 3:00 PM on the check-in date) 
          to avoid penalties. If a booking is canceled after the specified cancellation deadline, a cancellation fee will apply. 
          If the guest does not show up for the reservation and fails to cancel in advance, a no-show fee will be charged, which 
          may be equivalent to the full cost of the first night’s stay.</p>
        </div>

        <button 
          type="submit" 
          className="submit-button" 
          onClick={handleSubmit}>
          Book Now
        </button>

        </div>
      </div>
    </div>
  );
};

export default BookingForm;