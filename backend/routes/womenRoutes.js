const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
} = require("../controllers/womenController");

// POST → create new product
router.post("/", createProduct);

// GET → fetch all products
router.get("/", getProducts);

module.exports = router;
