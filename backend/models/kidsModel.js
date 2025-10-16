// backend/models/kidsModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const KidsProduct = sequelize.define(
  "KidsProduct",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "kids_products",
    timestamps: true,
  }
);

module.exports = KidsProduct;
