const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Post = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    buyer_id: {
      type: DataTypes.INTEGER
    },
    sell_status: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.INTEGER,
      unique: true, // one-to-one relationship
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Post;
