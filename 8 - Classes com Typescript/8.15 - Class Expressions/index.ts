const myClass = class<T> {
  constructor(public name: T) {
    this.name = name;
  }
};

const person = new myClass("Wagner");

console.log(person);
