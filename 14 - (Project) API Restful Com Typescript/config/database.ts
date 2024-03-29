import mongoose from "mongoose";
import config from "config"
import Logger from "./looger";

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try {
    await mongoose.connect(dbUri)
    Logger.info("Conectado.")
  } catch (error) {
    Logger.error("Não foi possível conectar!")
    Logger.error(`Erro: ${error}`)
    process.exit(1)
  }
}

export default connect