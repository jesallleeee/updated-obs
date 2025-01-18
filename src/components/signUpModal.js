import React, { useState } from "react";
import "./signUpModal.css";

const SignupModal = ({ isVisible, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!isVisible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate form inputs
  const validate = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";

    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
        formData.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long and include a letter, a number, and a special character.";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Form submitted successfully:", formData);
      setFormErrors({});
      onClose(); // Close the modal after submission
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="signup-form">
          <h2>Create an account</h2>
          <p>
            Already have an account?{" "}
            <a href="#" className="login-link" onClick={onClose}>
              Log in
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="first-name">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {formErrors.firstName && (
                  <span className="signup-error-text">{formErrors.firstName}</span>
                )}
              </div>
              <div className="signup-form-group">
                <label htmlFor="last-name">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {formErrors.lastName && (
                  <span className="signup-error-text">{formErrors.lastName}</span>
                )}
              </div>
            </div>
            <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <span className="signup-error-text">{formErrors.email}</span>
              )}
            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="signup-toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
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
                {formErrors.password && (
                  <span className="signup-error-text">{formErrors.password}</span>
                )}
              </div>
              <div className="signup-form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="signup-toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    <img
                      src={
                        showConfirmPassword
                          ? "https://cdn-icons-png.flaticon.com/512/565/565654.png" // Eye Slash Icon
                          : "https://cdn-icons-png.flaticon.com/512/565/565655.png" // Eye Icon
                      }
                      alt={showConfirmPassword ? "Hide password" : "Show password"}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                </div>
                {formErrors.confirmPassword && (
                  <span className="signup-error-text">{formErrors.confirmPassword}</span>
                )}
              </div>
            </div>
            <div className="signup-password-instructions">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </div>
            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
          <p className="signup-terms">
            By creating an account, you agree to the{" "}
            <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
        <div className="signup-image"></div>
      </div>
    </div>
  );
};

export default SignupModal;