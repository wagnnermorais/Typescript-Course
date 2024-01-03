"use strict";
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    privateMethod() {
        return "Método privado!";
    }
    showName() {
        return this.name;
    }
    showMethod() {
        return this.privateMethod();
    }
}
const privateObject = new PrivateClass();
// console.log(privateObject.name) -> Irá acusar um erro pois name é privado
console.log(privateObject.showName()); // criando um método na própria classe para retornar a propriedade funcionará.
console.log(privateObject.showMethod());
class TestingPrivate extends PrivateClass {
    myMethod() {
        // this.privateMethod() -> Irá acusar um erro pois o metodo é privado
    }
}
