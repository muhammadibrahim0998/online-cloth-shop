import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Men from "./components/pages/Men";
import Women from "./components/pages/Woman";
 import Kids from "./components/pages/kids";
import Contact from "./components/pages/Contact";

import Cart from "./components/pages/Cart";
import Login from "../src/register/login";
import Signup from "../src/register/signup";
import Logout from "../src/register/logout";
import Footer from "./components/footer";

// import Checkout from "./components/pages/Checkout";
// import {
//   FaWhatsapp,
//   FaEnvelope,
//   FaFacebook,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Main Page Content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        {/* <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        /> */}
      </div>

      {/* Footer displayed on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
