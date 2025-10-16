const Product = require("../models/Product");

// GET All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

// POST Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, img } = req.body;
    const product = await Product.create({ name, price, img });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};
