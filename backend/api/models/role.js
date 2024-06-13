const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Role = sequelize.define(
  "role",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: DataTypes.ENUM('admin, user, moderator'),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Role;
