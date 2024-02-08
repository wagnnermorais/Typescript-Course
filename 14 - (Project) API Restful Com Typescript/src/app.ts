require("dotenv").config()

import express from "express"
import config from "config"
import router from "./router"
import database from "../config/database"
import Logger from "../config/looger"
import morganMiddleware from "./middleware/morganMiddleware"

const app = express()

// JSON Middleware
app.use(express.json())

// Morgan Config
app.use(morganMiddleware)

// Routes
app.use("/api/", router)

// Porta da aplicação
const port = config.get<number>("port")
app.listen(port, async () => {
  await database()
  Logger.info(`Aplicação está funcionando na porta: ${port}`)
})

