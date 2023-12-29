class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("caixa", "surpresa");
const secondItem = new Item(18, true);

console.log(newItem);
console.log(newItem.showFirst);

console.log(secondItem);
console.log(secondItem.showFirst);
