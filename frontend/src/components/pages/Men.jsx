import React from "react";
import "./css/Men.css";
import { motion } from "framer-motion";

function Men() {
  const products = [
    {
      id: 1,
      name: "Classic Black T-Shirt",
      price: "$29.99",
      img: "https://tse2.mm.bing.net/th/id/OIP.NB3vPPBlTWMhYuzedymZPwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      name: "Stylish Denim Jacket",
      price: "$89.99",
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Formal Blue Suit",
      price: "$199.99",
      img: "https://tse1.mm.bing.net/th/id/OIP.Eg7HiQrcXQsa_BUTGAEdQAHaJQ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 4,
      name: "Casual Grey Hoodie",
      price: "$59.99",
      img: "https://tse4.mm.bing.net/th/id/OIP.piHWOStjmXJ6TLbvIJe9hAHaJ3?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 5,
      name: "Slim Fit Jeans",
      price: "$69.99",
      img: "https://diners.com.pk/cdn/shop/products/BJ3079-D-BLUE-RS-3890-01_1170x.jpg?v=1686088101",
    },
    {
      id: 6,
      name: "Brown Leather Jacket",
      price: "$149.99",
      img: "https://tse2.mm.bing.net/th/id/OIP.-KNfdKVfbLxF4cpFPkhi8AHaI4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div className="men-container">
      <motion.h1
        className="men-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Men’s Latest Collection
      </motion.h1>

      <motion.p
        className="men-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Discover timeless classics and trending styles curated for the modern man.
      </motion.p>

      <div className="men-grid">
        {products.map((product) => (
          <motion.div
            className="men-card"
            key={product.id}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="men-img-container">
              <motion.img
                src={product.img}
                alt={product.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="men-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <button className="add-btn">🛒 Add to Cart</button>
              </motion.div>
            </div>
            <div className="men-details">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Men;
