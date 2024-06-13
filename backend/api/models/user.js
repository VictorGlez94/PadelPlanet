const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "123",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
    },
    card_number: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'XXXXX'
    },
    phone: {
      type: DataTypes.BIGINT,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    role_id: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
