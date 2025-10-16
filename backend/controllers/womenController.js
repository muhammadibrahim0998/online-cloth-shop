const WomenProduct = require("../models/womenModel");

// ✅ Create new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, img } = req.body;
    const newProduct = await WomenProduct.create({ name, price, img });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("❌ Error creating product:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await WomenProduct.findAll();
    res.json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
