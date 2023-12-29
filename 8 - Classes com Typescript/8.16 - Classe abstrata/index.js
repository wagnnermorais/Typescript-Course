"use strict";
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
        this.name = name;
    }
    showName() {
        return `O nome é: ${this.name}`;
    }
}
const newAbstractObject = new AbstractExample("Wagner");
console.log(newAbstractObject.showName());
