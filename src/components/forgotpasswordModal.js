import React, { useState } from 'react';
import './forgotpasswordModal.css'; // Optional: Add styles for the modal

const ForgotPasswordModal = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
    } else {
      // Implement forgot password logic (e.g., send reset email)
      setMessage("Password reset email sent!");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="forgot-password-overlay">
      <div className="forgot-password-content">
      <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Forgot Password</h2>
        <p>Enter email to change your password.</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {message && <p className="message">{message}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
