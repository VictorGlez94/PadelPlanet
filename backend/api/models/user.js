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
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    user_img: {
      type: DataTypes.STRING,
      // defaultValue: 'asdasd'
    },
    gender: {
      type: DataTypes.STRING,
    },
    card_number: {
      type: DataTypes.STRING,
      allowNull: true,
      // defaultValue: "XXXXX",
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
      // defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    validate: {
      genderCheck(){
        const allowedGenders = ["Hombre", "Mujer", "Otro"];
        if (!allowedGenders.includes(this.gender)) {
          throw new Error("Invalid gender");
        }
      }
    }
  }
);

module.exports = User;
