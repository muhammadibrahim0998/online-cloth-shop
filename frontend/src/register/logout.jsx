import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaCheckCircle } from "react-icons/fa";
import "../components/pages/css/logout.css";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token & redirect
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }, [navigate]);

  return (
    <div className="logout-wrapper">
      <div className="logout-card">
        <FaSignOutAlt className="logout-icon" />
        <h2>You have successfully logged out</h2>
        <p>Redirecting you to the login page...</p>
        <div className="logout-status">
          <FaCheckCircle className="check-icon" />
          <span>Session cleared</span>
        </div>
      </div>
    </div>
  );
}

export default Logout;
