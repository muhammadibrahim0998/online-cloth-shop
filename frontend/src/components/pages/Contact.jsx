import React from "react";
import "./css/Contact.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you! Reach out through any of the options below.
      </p>

      <div className="contact-cards">
        {/* WhatsApp */}
        <div className="contact-card">
          <FaWhatsapp className="icon whatsapp" />
          <h3>WhatsApp</h3>
          <p>0343-2350978</p>
          <a
            href="https://wa.me/923432350978"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn">
            Chat on WhatsApp
          </a>
        </div>

        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="icon email" />
          <h3>Email</h3>
          <p>izazkhanmalakand@gmail.com</p>
          <a
            href="mailto:izazkhanmalakand@gmail.com"
            className="contact-btn email-btn">
            Send Email
          </a>
        </div>

        {/* Facebook */}
        <div className="contact-card">
          <FaFacebook className="icon facebook" />
          <h3>Facebook</h3>
          <p>Follow us for latest updates</p>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn fb-btn">
            Visit Facebook
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="location-section">
        <h2>
          <FaMapMarkerAlt /> Our Location
        </h2>
        <p>Malakand, Khyber Pakhtunkhwa, Pakistan</p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Malakand,+Pakistan&output=embed"
          allowFullScreen
          loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Contact;
