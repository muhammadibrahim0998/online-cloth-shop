const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const womenRoutes = require("./routes/womenRoutes");
const kidsRoutes = require("./routes/kidsRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/women", womenRoutes);
app.use("/api/kids_products", kidsRoutes);
app.use("/api/auth", authRoutes);
// Server + DB Connection
const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.log("❌ DB connection error: ", err));
