require("dotenv").config();
const { checkConnection, syncModels } = require("./database/index");
const addRelationsToModels = require("./database/relations");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

async function checkAndSyncSQLServer() {
  await checkConnection();
  await addRelationsToModels();
  await syncModels();
}

function initializeAndListenWithExpress() {
  const app = express()
    .use(cors()) //debe rellenarse con la url del front, ahora está vacío porque es en localhost
    .use(morgan("dev"))
    .use(express.json())// para que se sea capaz de leer json
    //middleware: urlencoded (para que entienda determinadas referencias en la url como espacio = %20)
    .use("/api", require("./api/routes"))

    .listen(3000, () => {
      console.log(`> Listening on port: ${3000}`);
    });
}

async function startAPI() {
  await checkAndSyncSQLServer();
  initializeAndListenWithExpress();
}

startAPI();

// require("dotenv").config();

// const express = require("express");
// const { Sequelize } = require("sequelize");

// const app = express();
// const port = process.env.PORT || 3000;

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DIALECT,
//     port: process.env.DB_PORT,
//     dialectOptions: {
//       options: {
//         encrypt: true,
//         trustServerCertificate: true,
//       },
//     },
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection to SQL Server has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// app.get("/", (req, res) => {
//   res.send("Backend server is running!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
