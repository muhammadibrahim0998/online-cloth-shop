import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      {/* === TOP SECTION === */}
      <div className="footer-top">
        {/* ---- BRAND ---- */}
        <div className="footer-brand">
          <h2>Izaz Cloth House</h2>
          <p>
            Redefining fashion with elegance, comfort, and premium quality.
            Discover your next favorite outfit today.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* ---- QUICK LINKS ---- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
          </ul>
        </div>

        {/* ---- CONTACT INFO ---- */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Saddar, Rawalpindi, Pakistan</p>
          <p><FaPhone /> +92 300 1234567</p>
          <p><FaEnvelope /> support@izazcloth.com</p>
        </div>

        {/* ---- MAP ---- */}
        <div className="footer-map">
          <h3>Our Location</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.290108369372!2d73.0479!3d33.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df946d10d9f1c7%3A0xe49b7af87901b3cf!2sSaddar%2C%20Rawalpindi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* === BOTTOM SECTION === */}
      <div className="footer-bottom">
        <p>© 2025 Izaz Cloth House. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

