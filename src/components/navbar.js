import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import elysianLogo from '../assets/elysianwhite.png';
import elysianLogoScrolled from '../assets/elysiangold.png';
import userIconImg from '../assets/userIcon.png';
import bookingsIconImg from '../assets/bookingsIcon.png';
import logoutIconImg from '../assets/logoutIcon.png';
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownView, setDropdownView] = useState('menu');
  const dropdownRef = useRef(null); // Ref for dropdown container
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
        <div className="user-menu" ref={dropdownRef}>
          <FaUserCircle className="user-icon" size={30} onClick={toggleDropdown} />
          {isDropdownOpen && (
            dropdownView === 'menu' ? (
              <div className="dropdown-menu">
                <p className="dropdown-header">Limuel Alcovendas</p>
                <p className="dropdown-subheader">Guest</p>
                <div className="dropdown-item" onClick={() => setDropdownView('editProfile')}>
                  <img src={userIconImg} alt="Edit Profile" className="dropdown-icon" />
                  <span>Edit Profile</span>
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('/bookings')}>
                  <img src={bookingsIconImg} alt="My Bookings" className="dropdown-icon" />
                  <span>Bookings</span>
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('/')}>
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
                <form className="edit-form">
                  <label>
                    Name
                    <input type="text" defaultValue="Limuel Alcovendas" />
                  </label>
                  <label>
                    Email address
                    <input type="email" defaultValue="limuelalco5@gmail.com" />
                  </label>
                  <label>
                    Password
                    <input type="password" defaultValue="*********" />
                  </label>
                  <button type="submit" className="save-btn">Save Changes</button>
                </form>
              </div>
            ) : (
              <div className="my-bookings">
                <div className="my-bookings-header">
                  <button className="back-button" onClick={() => setDropdownView('menu')}>←</button>
                  <h2>My Bookings</h2>
                </div>
                <div className="booking-tabs">
                  <button className="booking-tab active">Bookings</button>
                  <button className="booking-tab">Cancelled</button>
                </div>
                <div className="booking-item-nav">
                  <img src="roomImage.jpg" alt="Standard Room" className="booking-image" />
                  <div className="booking-info">
                    <h3>Standard Room</h3>
                    <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                    <p className="booking-status to-check-in">To be check in <span>😊</span></p>
                  </div>
                </div>
                <div className="booking-item-nav">
                  <img src="roomImage.jpg" alt="Standard Room" className="booking-image" />
                  <div className="booking-info">
                    <h3>Standard Room</h3>
                    <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                    <p className="booking-status completed">Completed <span>✔</span></p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
