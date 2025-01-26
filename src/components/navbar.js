import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import elysianLogo from '../assets/elysianwhite.png';
import elysianLogoScrolled from '../assets/elysiangold.png';
import userIconImg from '../assets/userIcon.png';
import bookingsIconImg from '../assets/bookingsIcon.png';
import loginIconImg from '../assets/loginIcon.png';
import logoutIconImg from '../assets/logoutIcon.png';
import signupIconImg from '../assets/signupIcon.png';
import bookingsImage1 from "../assets/roomss.jpg";
import LogInModal from "./logInModal";
import SignupModal from './signUpModal';
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownView, setDropdownView] = useState('menu');
  const [isLogInModalVisible, setIsLogInModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("bookings");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setDropdownView('menu'); // Reset view to 'menu' when toggling
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setDropdownView('menu'); // Reset view on close
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle navigation and reset dropdown
  const handleOptionClick = (path) => {
    if (path === '/bookings') {
      setDropdownView('myBookings'); // Update view to 'myBookings'
    } else {
      navigate(path); // Navigate only for paths other than 'myBookings'
      setIsDropdownOpen(false); // Close dropdown
      setDropdownView('menu'); // Reset dropdown view
    }
  };

  const closeLogInModal = () => {
    setIsLogInModalVisible(false); // Hide the login modal
    setIsLoggedIn(true); // Simulate logging in for demo purposes /////////////////////////////
  };

  const closeSignupModal = () => {
    setIsSignupModalVisible(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logging out for demo purposes
    setIsDropdownOpen(false); // Close the dropdown
  };

  const userMenuClass = isDropdownOpen ? 'active' : '';

  // Static data for bookings (this would be replaced with dynamic fetching later)
  const bookings = [
    { id: 1, roomType: 'Standard Room', startDate: 'Fri, Dec 06, 2024', endDate: 'Sat, Dec 07, 2024', status: 'Pending', image: bookingsImage1 },
    { id: 2, roomType: 'Standard Room', startDate: 'Fri, Dec 08, 2024', endDate: 'Sat, Dec 09, 2024', status: 'Completed', image: bookingsImage1 },
    { id: 3, roomType: 'Standard Room', startDate: 'Fri, Dec 10, 2024', endDate: 'Sat, Dec 11, 2024', status: 'Completed', image: bookingsImage1 },
    { id: 4, roomType: 'Standard Room', startDate: 'Fri, Dec 12, 2024', endDate: 'Sat, Dec 13, 2024', status: 'Cancelled', image: bookingsImage1 },
    { id: 5, roomType: 'Standard Room', startDate: 'Fri, Dec 14, 2024', endDate: 'Sat, Dec 15, 2024', status: 'Cancelled', image: bookingsImage1 },
    { id: 6, roomType: 'Standard Room', startDate: 'Fri, Dec 16, 2024', endDate: 'Sat, Dec 17, 2024', status: 'Cancelled', image: bookingsImage1 },
    { id: 7, roomType: 'Deluxe Room', startDate: 'Fri, Dec 18, 2024', endDate: 'Sat, Dec 19, 2024', status: 'Completed', image: bookingsImage1 },
  ];

   // Sorting function
   const sortBookings = (bookings) => {
    return bookings.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };

  // Filter bookings by status and sort them
  const filterBookings = (status) => {
    return sortBookings(bookings.filter(booking => booking.status === status));
  };

  const renderBookingItem = (booking) => (
    <div className="booking-item-nav" key={booking.id}>
      <img src={booking.image} alt="Booked Room" className="booking-image" />
      <div className="booking-info">
        <h3>{booking.roomType}</h3>
        <div className="booking-info-details">
          <p>{`${booking.startDate} - ${booking.endDate}`}</p>
          <p className={`booking-status ${booking.status.toLowerCase()}`}>{booking.status}</p>
        </div>
      </div>
    </div>
  );

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc')); // Toggle between 'asc' and 'desc'
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img 
          src={isScrolled ? elysianLogoScrolled : elysianLogo} 
          alt="Elysian Logo" 
        />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/facilities" 
            className={({ isActive }) => (isActive ? "active-link" : "")}>
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/room" 
            className={({ isActive }) => (isActive ? "active-link" : "")}>
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="book-btn" onClick={() => navigate('/selectRoom')}>Book now</button>
        <div className={`user-menu ${userMenuClass}`} ref={dropdownRef}>
          <FaUserCircle className="user-icon" size={30} onClick={toggleDropdown} />
            {isDropdownOpen && (
              isLoggedIn ? (
                dropdownView === 'menu' ? (
                  <div className="dropdown-menu">
                    <p className="dropdown-header">Limuel Alcovendas</p>
                    <div className="dropdown-item" onClick={() => handleOptionClick('/bookings')}>
                      <img src={bookingsIconImg} alt="My Bookings" className="dropdown-icon" />
                      <span>Bookings</span>
                    </div>
                    <div className="dropdown-item" onClick={handleLogout}>
                      <img src={logoutIconImg} alt="Log out" className="dropdown-icon" />
                      <span>Log out</span>
                    </div>
                  </div>
                ) : dropdownView === 'editProfile' ? (
                  <div className="edit-profile">
                    <div className="edit-header">
                      <button className="back-button" onClick={() => setDropdownView('menu')}>←</button>
                      <h2>Edit Profile</h2>
                    </div>
                  </div>
                ) : (
                  <div className="my-bookings">
                    <div className="bookingsHeaderDiv">
                      <div className="my-bookings-header">
                        <button className="back-button" onClick={() => setDropdownView("menu")}>
                          ←
                        </button>
                        <h2>My Bookings</h2>
                      </div>

                      <div className="booking-tabs">
                        <button
                          className={`booking-tab ${activeTab === "bookings" ? "active" : ""}`}
                          onClick={() => setActiveTab("bookings")}
                        >
                          Bookings
                        </button>
                        <button
                          className={`booking-tab ${activeTab === "cancelled" ? "active" : ""}`}
                          onClick={() => setActiveTab("cancelled")}
                        >
                          Cancelled
                        </button>
                      </div>
                  {/* Sorting Buttons */}
                  <div className="sort-buttons">
                    <button className="sort-toggle" onClick={toggleSortOrder}>
                        {sortOrder === 'asc' ? '↑' : '↓'}
                      </button>
                  </div>
                    </div>
                      <div className="bookingsBodyDiv">
                        {activeTab === "bookings" && filterBookings('Pending').map(renderBookingItem)}
                        {activeTab === "bookings" && filterBookings('Completed').map(renderBookingItem)}
                        {activeTab === "cancelled" && filterBookings('Cancelled').map(renderBookingItem)}
                      </div>
                  </div>
                )
              ) : (
              <div className="dropdown-menu">
                <p className="dropdown-header">Guest</p>
                <div
                  className="dropdown-item"
                  onClick={() => setIsLogInModalVisible(true)} // Show LogInModal on click
                >
                  <img src={loginIconImg} alt="Log in" className="dropdown-icon" />
                  <span>Log in</span>
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => setIsSignupModalVisible(true)} // Show SignupModal on click
                >
                  <img src={signupIconImg} alt="Sign up" className="dropdown-icon" />
                  <span>Sign up</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <LogInModal isVisible={isLogInModalVisible} onClose={closeLogInModal} />
      <SignupModal isVisible={isSignupModalVisible} onClose={closeSignupModal} />
    </nav>
  );
}

export default Navbar;
