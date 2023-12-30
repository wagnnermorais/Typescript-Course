function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou A.");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou B.");
  };
}

class MultipleDecorators {
  @a()
  @b()
  testing() {
    console.log("Terminando execução!");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();
