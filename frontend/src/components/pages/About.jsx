import React from "react";
import { motion } from "framer-motion";
import "./css/About.css";

function About() {
  return (
    <div className="about-container">
      {/* ---------- HERO SECTION ---------- */}
      <section className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About <span>Izaz Cloth House</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Redefining fashion with elegance, comfort, and quality since 2020.
        </motion.p>
      </section>

      {/* ---------- STORY SECTION ---------- */}
      <section className="story-section">
        <motion.div
          className="story-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Story</h2>
          <p>
            Izaz Cloth House was founded with a vision to create a shopping
            experience that blends fashion, comfort, and affordability. What
            started as a small local store has now grown into a full-fledged
            online fashion brand — serving thousands of customers worldwide.
          </p>
          <p>
            Every product we make is a statement of quality, individuality, and
            style. We believe that fashion should empower you — not limit you.
          </p>
        </motion.div>

        <motion.div
          className="story-img"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80"
            alt="Our Story"
          />
        </motion.div>
      </section>

      {/* ---------- MISSION SECTION ---------- */}
      <section className="mission-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          To inspire confidence through timeless designs, sustainable materials,
          and premium craftsmanship. We aim to make fashion accessible to all —
          without compromising on ethics or quality.
        </motion.p>

        <div className="mission-cards">
          <motion.div
            className="mission-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
              alt="Quality"
            />
            <h4>Unmatched Quality</h4>
            <p>We use only the best fabrics and expert tailoring techniques.</p>
          </motion.div>

          <motion.div
            className="mission-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/476/476863.png"
              alt="Sustainability"
            />
            <h4>Sustainability</h4>
            <p>Eco-friendly production with minimal environmental impact.</p>
          </motion.div>

          <motion.div
            className="mission-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
              alt="Customer"
            />
            <h4>Customer First</h4>
            <p>Your satisfaction and trust are at the core of what we do.</p>
          </motion.div>
        </div>
      </section>

      {/* ---------- TEAM SECTION ---------- */}
      <section className="team-section">
        <h2>Meet Our Creative Team</h2>
        <div className="team-grid">
          {[
            {
              name: "Izaz Khan",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Sarah Ali",
              role: "Head of Design",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Ahmad Raza",
              role: "Marketing Manager",
              img: "https://randomuser.me/api/portraits/men/33.jpg",
            },
            {
              name: "Ayesha Noor",
              role: "Customer Relations",
              img: "https://randomuser.me/api/portraits/women/56.jpg",
            },
          ].map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="cta-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Join the <span>Izaz Family</span> Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Shop your favorite styles and be part of a community that celebrates
          confidence and individuality.
        </motion.p>
        <motion.button
          className="shop-btn"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Shop Now
        </motion.button>
      </section>
    </div>
  );
}

export default About;
