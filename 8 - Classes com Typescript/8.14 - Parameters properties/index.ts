class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
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
