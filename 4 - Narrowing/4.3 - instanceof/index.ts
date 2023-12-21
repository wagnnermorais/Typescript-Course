class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const user = new User("Matheus");
const user2 = new SuperUser("Wagner");

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Bem-vindo, ${user.name}! Deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Bem-vindo, ${user.name}`);
  }
}

userGreeting(user);
userGreeting(user2);
