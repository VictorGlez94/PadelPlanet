const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
);

// const sequelize = new Sequelize(process.env.DB_URL, {logging: false});

async function checkConnection() {
  await sequelize
    .authenticate()
    .then(() => {
      console.log(
        "Connection to SQL Server has been established successfully."
      );
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
}

async function syncModels(value) {
  const state = {
    alter: { alter: true },
    force: { force: true },
  };

  try {
    await sequelize.sync(state[value] || ""); //state[value] || ''
    console.log(`All models were synchronized successfully using sync()`); //
  } catch (error) {
    throw error;
  }
}

module.exports = { sequelize, checkConnection, syncModels };
