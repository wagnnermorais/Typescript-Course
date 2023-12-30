import { Person } from "./types";

class User implements Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Wagner", 23);

console.log(user);
