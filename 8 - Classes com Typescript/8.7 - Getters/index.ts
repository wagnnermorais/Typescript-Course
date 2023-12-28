class Person {
  name;
  lastName;

  constructor(name: string, lastName: string) {
    this.name = name;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
}

const wagnerMorais = new Person("Wagner", "Morais");

console.log(wagnerMorais.fullName);
