function myDecorator() {
  console.log("Iniciando Decorator");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando Decorator:");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método!");
  }
}

const myObj = new myClass();

myObj.testing();
