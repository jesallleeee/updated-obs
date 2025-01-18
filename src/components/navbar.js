import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import elysianLogo from '../assets/elysianwhite.png';
import elysianLogoScrolled from '../assets/elysiangold.png';
import userIconImg from '../assets/userIcon.png';
import bookingsIconImg from '../assets/bookingsIcon.png';
import logoutIconImg from '../assets/logoutIcon.png';
import bookingsImage1 from "../assets/roomss.jpg";
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownView, setDropdownView] = useState('menu');
  const [activeTab, setActiveTab] = useState("bookings");
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
          `        <label>
                      Name
                  </label>
                  <input type="text" defaultValue="Limuel Alcovendas" />

                  <label>
                      Email address
                  </label>
                  <input type="email" defaultValue="limuelalco5@gmail.com" />

                  <label>
                      Password
                  </label>
                  <input type="password" defaultValue="*********" />

                  <button type="submit" className="save-btn">Save Changes</button>
              </form>`
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
              </div>

              <div className="bookingsBodyDiv">
              {/* Render content based on activeTab */}
              {activeTab === "bookings" && (
                <>
                  <div className="booking-item-nav">
                    <img src={bookingsImage1} alt="Booked Room" className="booking-image" />
                    <div className="booking-info">
                      <h3>Standard Room</h3>
                      <div className="booking-info-details">
                          <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                          <p className="booking-status pending">Pending</p>
                      </div>
                    </div>  
                  </div>

                  <div className="booking-item-nav">
                    <img src={bookingsImage1} alt="Booked Room" className="booking-image" />
                    <div className="booking-info">
                      <h3>Standard Room</h3>
                      <div className="booking-info-details">
                          <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                          <p className="booking-status completed">Completed</p>
                      </div>
                    </div>
                  </div>

                  <div className="booking-item-nav">
                    <img src={bookingsImage1} alt="Booked Room" className="booking-image" />
                    <div className="booking-info">
                      <h3>Standard Room</h3>
                      <div className="booking-info-details">
                          <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                          <p className="booking-status completed">Completed</p>
                      </div>
                    </div>
                  </div>
                </>
              )} 
              {activeTab === "cancelled" && (
                <>
                  <div className="booking-item-nav">
                    <img src={bookingsImage1} alt="Cancelled Room" className="booking-image" />
                    <div className="booking-info">
                      <h3>Standard Room</h3>
                      <div className="booking-info-details">
                          <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                          <p className="booking-status cancelled">Cancelled</p>
                      </div>
                    </div>  
                  </div>

                  <div className="booking-item-nav">
                    <img src={bookingsImage1} alt="Cancelled Room" className="booking-image" />
                    <div className="booking-info">
                      <h3>Standard Room</h3>
                      <div className="booking-info-details">
                          <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                          <p className="booking-status cancelled">Cancelled</p>
                      </div>
                    </div>
                  </div>

                  <div className="booking-item-nav">
                    <img src={bookingsImage1} alt="Cancelled Room" className="booking-image" />
                    <div className="booking-info">
                      <h3>Standard Room</h3>
                      <div className="booking-info-details">
                          <p>Fri, Dec 06, 2024 - Sat, Dec 07, 2024</p>
                          <p className="booking-status cancelled">Cancelled</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
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
