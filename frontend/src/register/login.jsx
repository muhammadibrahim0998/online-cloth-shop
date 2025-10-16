import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
 import "../components/pages/css/login.css";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-heading">Welcome Back 👋</h2>
        <p className="login-subtext">Login to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <FaUserAlt className="icon" />
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

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="login-options">
            <a href="/forgot" className="forgot-link">
              Forgot Password?
            </a>
            <p>
              Don’t have an account?
              <a href="/signup" className="signup-link">
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
