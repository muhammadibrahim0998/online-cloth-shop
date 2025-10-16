import React from "react";
import "./css/Women.css";
import { motion } from "framer-motion";
import axios from "axios"; // ✅ Axios Import

function Women() {
  const products = [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: "$49.99",
      img: "https://th.bing.com/th/id/R.1388835dfeaa20e903836c4bb9d0082c?rik=xI%2b%2fEK4gXIsbpw&riu=http%3a%2f%2fstylesweekly.com%2fwp-content%2fuploads%2f2016%2f06%2f10-best-floral-dresses-for-beautiful-summer-1.jpg&ehk=qMzBmAtoJ1W2iASRfG2FpmE0TKA5jhgtpNC6%2fGaIluw%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Elegant Evening Gown",
      price: "$129.99",
      img: "https://th.bing.com/th/id/R.064d5218f7fb96d60c773a0588f29751?rik=vtLADgtSulDeQg&riu=http%3a%2f%2fwww.stylemotivation.com%2fwp-content%2fuploads%2f2015%2f02%2fgown-14-620x981.jpg&ehk=W1hv7US2ql8LNxlbK5NqC8zEj6wCDj9zAbc8CYwGJ6Y%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      name: "Casual White Top",
      price: "$39.99",
      img: "https://5.imimg.com/data5/SELLER/Default/2023/1/SY/OQ/OQ/182481530/solid-top-500x500.jpeg",
    },
    {
      id: 4,
      name: "Stylish Denim Jacket",
      price: "$79.99",
      img: "https://tse4.mm.bing.net/th/id/OIP.TWK2eMs6LE_K2aPnDxp7hwHaJ3?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 5,
      name: "Chic Pink Handbag",
      price: "$59.99",
      img: "https://tse1.mm.bing.net/th/id/OIP.ts6WeTQpGOoWSgWwMccBEwHaIO?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 6,
      name: "Trendy Heels",
      price: "$89.99",
      img: "https://i.pinimg.com/736x/a6/ec/86/a6ec867689c88b5654693605059cddd3.jpg",
    },
  ];

  // ✅ Function to send product to backend
  const handleAddToCart = async (product) => {
    try {
      const res = await axios.post("http://localhost:5000/api/women", {
        name: product.name,
        price: product.price,
        img: product.img,
      });
      console.log("✅ Saved:", res.data);
      alert("✅ Product saved to database");
    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ Could not save product");
    }
  };

  return (
    <div className="women-container">
      <motion.h1
        className="women-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Women’s Latest Collection
      </motion.h1>

      <motion.p
        className="women-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Step into elegance and style — explore the season’s hottest looks.
      </motion.p>

      <div className="women-grid">
        {products.map((product) => (
          <motion.div
            className="women-card"
            key={product.id}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="women-img-container">
              <motion.img
                src={product.img}
                alt={product.name}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="women-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {/* ✅ Add Button Event */}
                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  🛒 Add to Cart
                </button>
              </motion.div>
            </div>
            <div className="women-details">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Women;
