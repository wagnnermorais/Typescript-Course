abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass {
  constructor(public name: string) {
    super();
    this.name = name;
  }

  showName() {
    return `O nome é: ${this.name}`;
  }
}

const newAbstractObject = new AbstractExample("Wagner");

console.log(newAbstractObject.showName());
