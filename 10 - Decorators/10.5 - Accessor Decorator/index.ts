function enumerableAccessor(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerableAccessor(true)
  get ShowName() {
    return `Nome do monstro: ${this.name}`;
  }

  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);
