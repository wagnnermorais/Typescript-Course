class Base {
  someMethod() {
    console.log("Método original.");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("Método da classe nova.");
  }
}

const myObject = new Nova();

myObject.someMethod();

const test = new Base();

test.someMethod();
