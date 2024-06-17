const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const ProductsCategory = sequelize.define(
  "products_category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM('Palas', 'Zapatillas', 'Camisetas', 'Pantalones', 'Mochilas', 'Accesorios'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsCategory;
