import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUserCircle } from 'react-icons/fa';
import elysianLogo from '../assets/elysianwhite.png';
import elysianLogoScrolled from '../assets/elysiangold.png';
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookNowClick = () => {
    navigate('/selectRoom');
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
            className={({ isActive }) => isActive ? "active-link" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/facilities" 
            className={({ isActive }) => isActive ? "active-link" : ""}>
            Facilities
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/room" 
            className={({ isActive }) => isActive ? "active-link" : ""}>
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active-link" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="book-btn" onClick={handleBookNowClick}>Book now</button>
        <FaUserCircle className="user-icon" size={30} />
      </div>
    </nav>
  );
}

export default Navbar;