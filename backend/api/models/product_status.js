const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const ProductsStatus = sequelize.define(
  "products_status",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsStatus;
