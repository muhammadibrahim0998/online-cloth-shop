const express = require("express");
const router = express.Router();
const {
  createKidsProduct,
  getKidsProducts,
} = require("../controllers/kidsController");

// POST → Add new product
router.post("/", createKidsProduct);
router.get("/", getKidsProducts);

module.exports = router;
