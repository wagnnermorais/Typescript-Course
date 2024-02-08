import e, { Request, Response } from "express"
import { MovieModel } from "../models/Movie"
import Logger from "../../config/looger"

export async function createMovie(request: Request, response: Response) {
  try {
    const data = request.body
    const movie = await MovieModel.create(data)

    return response.status(201).json(movie)
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`)
  }
}