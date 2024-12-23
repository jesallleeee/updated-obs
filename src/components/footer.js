import React from 'react';
import './footer.css';
import logo from '../assets/elysianwhite.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="elysian" />
      <p>© 2024 Elysian. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
