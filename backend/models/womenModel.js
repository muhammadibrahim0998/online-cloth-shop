const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WomenProduct = sequelize.define(
  "WomenProduct",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    timestamps: true, // ✅ دا createdAt او updatedAt اتومات اضافه کوي
    tableName: "women_products", // ✅ دا د جدول نوم Explicitly Set کوي
  }
);

module.exports = WomenProduct;
