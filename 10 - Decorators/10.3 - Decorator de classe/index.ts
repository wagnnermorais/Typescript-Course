function classDecorator(constructor: Function) {
  console.log(constructor.name);

  constructor.name === "User" ? console.log("Criando usuário") : "";
}

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Wagner");

console.log(user);
