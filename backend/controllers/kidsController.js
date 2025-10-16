const KidsProduct = require("../models/kidsModel");

// ➕ Add new kids product
exports.createKidsProduct = async (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newProduct = await KidsProduct.create({ name, price, img });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("❌ Error creating kids product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📦 Get all kids products
exports.getKidsProducts = async (req, res) => {
  try {
    const products = await KidsProduct.findAll();
    res.json(products);
  } catch (error) {
    console.error("❌ Error fetching kids products:", error);
    res.status(500).json({ message: "Server error" });
  }
};
