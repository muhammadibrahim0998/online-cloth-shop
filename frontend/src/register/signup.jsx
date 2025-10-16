import React, { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import "../components/pages/css/signup.css";

import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert(res.data.message);
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2 className="signup-heading">Create Account ✨</h2>
        <p className="signup-subtext">Join us and start shopping in style!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <FaUserAlt className="icon" />
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <FaLock className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <div className="signup-options">
            <p>
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
