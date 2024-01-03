"use strict";
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.name} ${this.lastName}`;
    }
}
const wagnerMorais = new Person("Wagner", "Morais");
console.log(wagnerMorais.fullName);
