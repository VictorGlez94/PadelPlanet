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

    .listen(process.env.PORT, () => {
      console.log(`> Listening on port: ${process.env.PORT}`);
    });
}

async function startAPI() {
  await checkAndSyncSQLServer();
  initializeAndListenWithExpress();
}

startAPI();