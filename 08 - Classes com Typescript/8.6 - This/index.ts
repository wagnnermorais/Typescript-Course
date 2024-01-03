class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model}, e tem ${this.hp} cavalos de potência.`
    );
  }
}

const mercedes = new Truck("Arocs", 530);

mercedes.showDetails();
