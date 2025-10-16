import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ FIXED: Added import
import "./css/Home.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // ✅ FIXED: Initialize navigate

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "You can return items within 14 days of purchase with the original receipt.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we deliver worldwide with reliable courier partners.",
    },
    {
      question: "Are your clothes sustainable?",
      answer:
        "We use eco-friendly fabrics and packaging to reduce our footprint.",
    },
  ];

  return (
    <div className="home-container">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Latest Collection – Discover the New Season</h1>
          <p>Trendy • Affordable • Premium Quality</p>
          <button className="shop-btn" onClick={() => navigate("/shop")}>
            Shop Now
          </button>
        </div>
      </section>

      {/* ---------------- CATEGORIES SECTION ---------------- */}
      <section className="categories">
        <h2>All Categories</h2>
        <div className="category-grid">
          <motion.div
            className="category-card men"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate("/men")} // ✅ Redirect on click
            style={{ cursor: "pointer" }}
          >
            <h3>Men</h3>
          </motion.div>

          <motion.div
            className="category-card women"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate("/women")}
            style={{ cursor: "pointer" }}
          >
            <h3>Women</h3>
          </motion.div>

          <motion.div
            className="category-card kids"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => navigate("/kids")}
            style={{ cursor: "pointer" }}
          >
            <h3>Kids</h3>
          </motion.div>
        </div>
      </section>

      {/* ---------------- NEW ARRIVALS ---------------- */}
      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="products">
          {[
            {
              id: 1,
              name: "Floral Summer Dress",
              price: "$59.99",
              img: "https://lamosaik.com/cdn/shop/files/iPhone_13_mini_1_1_96178712-d671-4b45-b560-b0867b6eca27_200x.png?v=1691502432",
            },
            {
              id: 2,
              name: "Casual Denim Jacket",
              price: "$89.99",
              img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 3,
              name: "Elegant Black Suit",
              price: "$129.99",
              img: "https://tse4.mm.bing.net/th/id/OIP.u4AWoVnvqG9Y0q-geVPBqAHaLH?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 4,
              name: "Trendy Oversized Hoodie",
              price: "$69.99",
              img: "https://tse4.mm.bing.net/th/id/OIP._6JdsgtZeKhONd_AKpHTdQHaLH?cb=12&w=640&h=960&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 5,
              name: "Classic White Sneakers",
              price: "$79.99",
              img: "https://tse2.mm.bing.net/th/id/OIP.qFFGxW96QaJjSr8xA5gwEQHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
            },
            {
              id: 6,
              name: "Luxury Evening Gown",
              price: "$199.99",
              img: "https://cdn-images.farfetch-contents.com/31/91/42/80/31914280_61498373_1000.jpg",
            },
          ].map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-img">
                <img src={item.img} alt={item.name} />
                <div className="overlay">
                  <button className="buy-btn">Add to Cart</button>
                </div>
              </div>
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Customer"
            />
            <p>
              “Absolutely love the quality! The fabric feels premium and fits
              perfectly.”
            </p>
            <h4>- Sarah K.</h4>
          </div>
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Customer"
            />
            <p>
              “Amazing service and fast delivery. I’m definitely ordering
              again!”
            </p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card">
            <img
              src="https://randomuser.me/api/portraits/women/70.jpg"
              alt="Customer"
            />
            <p>
              “Stylish designs and great prices! My favorite online store now.”
            </p>
            <h4>- Emily R.</h4>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ / ACCORDION ---------------- */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {faqs.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="about-section">
        <h2>Why Choose Izaz Cloth House?</h2>
        <p>
          We combine modern designs with comfort and quality. Each piece in our
          collection is made with care, giving you confidence and style for
          every occasion.
        </p>
      </section>

      {/* ---------------- NEWSLETTER ---------------- */}
      <section className="newsletter">
        <h2>Join Our Newsletter</h2>
        <p>Get updates about new arrivals & exclusive discounts</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      {/* <footer className="footer">
        <p>© 2025 Izaz Cloth House. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Home;
