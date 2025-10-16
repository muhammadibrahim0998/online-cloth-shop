import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaShoppingBag,
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ===== Brand ===== */}
        <NavLink to="/" className="nav-logo">
          <FaShoppingBag className="logo-icon" />
          <span className="brand">
            Online <span className="highlight">Shopping</span> Center
          </span>
        </NavLink>

        {/* ===== Nav Links ===== */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/about" className="nav-item">About</NavLink>

          {/* ===== Category Dropdown ===== */}
          <div
            className="nav-item dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-title">
              Categories <FaChevronDown className="arrow" />
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/men" className="dropdown-item">Men</NavLink>
                <NavLink to="/women" className="dropdown-item">Women</NavLink>
                <NavLink to="/kids" className="dropdown-item">Kids</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="nav-item">Contact</NavLink>
          <NavLink to="/cart" className="nav-item cart-link">
            <FaShoppingCart /> Cart
          </NavLink>
        </div>

        {/* ===== Icons Section ===== */}
        <div className="nav-icons">
          {/* Search Icon */}
          <FaSearch className="nav-icon" onClick={() => setShowSearch(true)} />

          {/* Auth Dropdown */}
          <div className="auth-container">
            <FaUserCircle
              className="auth-icon"
              onClick={() => setAuthOpen(!authOpen)}
            />
            {authOpen && (
              <div className="auth-dropdown">
                <NavLink to="/login" className="auth-link" onClick={() => setAuthOpen(false)}>Login</NavLink>
                <NavLink to="/signup" className="auth-link" onClick={() => setAuthOpen(false)}>Sign Up</NavLink>
                <NavLink to="/logout" className="auth-link" onClick={() => setAuthOpen(false)}>Logout</NavLink>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* ===== Search Modal ===== */}
      {showSearch && (
        <div className="search-modal" onClick={() => setShowSearch(false)}>
          <div className="search-box" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Search for products..." autoFocus />
            <button><FaSearch /></button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
