class newUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new newUser("Wagner", 24);

console.log(user);
