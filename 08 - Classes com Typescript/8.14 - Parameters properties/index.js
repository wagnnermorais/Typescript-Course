"use strict";
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get ShowPrivateValues() {
        return `Quantidade total: ${this.qty} e seu preço é: $${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camiseta", 1, 129.9);
console.log(newShirt);
console.log(newShirt.name);
console.log(newShirt.ShowPrivateValues);
