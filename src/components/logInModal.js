import React, { useState } from 'react';
import "./logInModal.css";
import SignupModal from "./signUpModal";
import ForgotPasswordModal from "./forgotpasswordModal";

const LogInModal = ({ isVisible, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    setError(""); // Clear any previous errors
    console.log("Form submitted:", { email, password });
    // Add login logic here (e.g., API call)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpVisible(false);
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPasswordVisible(true); // Open Forgot Password modal
  };

  const handleForgotPasswordClose = () => {
    setIsForgotPasswordVisible(false); // Close Forgot Password modal
  };

  if (!isVisible) return null;

  return (
    <div className="login-overlay">
      <div className="login-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {/* Login Content */}
        <div className="login-form">
          <h2>Welcome to Elysian!</h2>
          <p>Sign in to your account.</p>
          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                <img
                  src={
                    showPassword
                      ? "https://cdn-icons-png.flaticon.com/512/565/565654.png" // Eye Slash Icon
                      : "https://cdn-icons-png.flaticon.com/512/565/565655.png" // Eye Icon
                  }
                  alt={showPassword ? "Hide password" : "Show password"}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>
            <a
              href="#"
              className="forgot-password"
              onClick={(e) => {
                e.preventDefault();
                handleForgotPasswordClick();
              }}
            >
            Forgot Password?</a>
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
        {/* Sign-Up Promotion */}
        <div className="signup-promo">
          <h3>Not a member? Join Us Today!</h3>
          <p>Start your journey to unforgettable stays—quick, easy, and free!</p>
          <a 
            href="#"
            className="signup-link"
            onClick={(e) => {
              e.preventDefault();
              handleSignUpClick();
            }}
          >
            Sign Up
          </a>
        </div>
      </div>
      <SignupModal isVisible={isSignUpVisible} onClose={handleSignUpClose} />
      <ForgotPasswordModal
        isVisible={isForgotPasswordVisible}
        onClose={handleForgotPasswordClose}
      />
    </div>
  );
};

export default LogInModal;