// iniciando o projeto:
import express from "express"
import { Request, Response, NextFunction } from "express"

const app = express()

// Criando middleware possibilitando usar JSON na aplicação.
app.use(express.json())

app.listen(3000, () => {
  console.log("Aplicação de Typescript + Express funcionando!")
})

app.get("/", (request, response) => {
  return response.send("Hello, Express!")
})

// Criando rota com POST
app.post("/api/product", (request, response) => {
  console.log(request.body)
  return response.send("Produto adicionado!")
})

// Criando rota para todas as requisições
app.all("/api/product/check", (request, response) => {
  if (request.method === "POST") {
    return response.send("Inseriu algum registro.")
  } else if (request.method === "GET") {
    return response.send("Leu algum registro.")
  } else {
    return response.send("Não foi possível realizar a operação.")
  }
})

// Interfaces do Express
app.get("/api/interfaces", (request: Request, response: Response) => {
  return response.send("Utilizando as interfaces!")
})

// Enviando JSON
app.get("/api/json", (request: Request, response: Response) => {
  return response.json({
    name: "Shirt",
    price: 30,
    color: "Blue",
    sizes: ["S", "M", "L"]
  })
})

// Router Parameters
app.get("/api/product/:id", (request: Request, response: Response) => {
  console.log(request.params)

  const id = request.params.id

  if (id == "5") {
    const product = {
      id: 5,
      name: "Shirt",
      price: 10
    }

    return response.json(product)
  } else {
    return response.send("Produto não encontrado.")
  }
})

// Rotas complexas
app.get("/api/product/:id/review/:reviewId", (request: Request, response: Response) => {
  console.log(request.params)

  const id = request.params.id
  const review = request.params.reviewId

  return response.send(`Acessando a review ${review} do produto ${id}.`)
})

// Router Handler
function getUser(request: Request, response: Response) {
  console.log(`Resgatando o usuário com o id: ${request.params.id}`)
  return response.send("O usuário foi encontrando.")
}

app.get("/api/user/:id", getUser)

// Middleware
function checkUser(request: Request, response: Response, next: NextFunction) {
  if (request.params.id === "1") {
    console.log("Acesso liberado.");
    next();
  } else {
    console.log("Acesso restrito.")
  }
}

app.get("/api/user/:id/access", checkUser, (request: Request, response: Response) => {
  return response.json({
    message: "Bem-vindo a área administrativa."
  })
})

// Middleware global
function showPath(request: Request, response: Response, next: NextFunction) {
  console.log(request.path)
  next()
}

app.use(showPath)

// Request e Response com Generics
app.get("/api/user/:id/details/:name", (
  request: Request<{ id: string; name: string }>,
  response: Response<{ status: boolean }>
) => {
  console.log(`ID: ${request.params.id}`)
  console.log(`Name: ${request.params.name}`)

  return response.json({ status: true })
})

// Tratando erros
app.get("/api/error", (request: Request, response: Response) => {
  try {
    throw new Error("Algo deu errado.")
  } catch (error: any) {
    response.status(500).json({ message: error.message })
  }
})