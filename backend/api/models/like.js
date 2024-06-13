const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Like = sequelize.define(
  "like",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Like;
