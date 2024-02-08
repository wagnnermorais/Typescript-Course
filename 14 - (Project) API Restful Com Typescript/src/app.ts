require("dotenv").config()

import express from "express"
import config from "config"
import router from "./router"
import database from "../config/database"
import Logger from "../config/looger"

const app = express()

// JSON Middleware
app.use(express.json())

// Routes
app.use("/api/", router)

// Porta da aplicação
const port = config.get<number>("port")
app.listen(port, async () => {
  await database()
  Logger.info(`Aplicação está funcionando na porta: ${port}`)
})

