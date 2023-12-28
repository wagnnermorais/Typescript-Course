"use strict";
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, e tem ${this.hp} cavalos de potência.`);
    }
}
const mercedes = new Truck("Arocs", 530);
mercedes.showDetails();
