class E {
  protected x = 10;
  protected protectedMethod() {
    console.log("Este método é protegido!");
  }
}

class F extends E {
  // Somente com métodos é possível acessar as propriedades protegidas da classe pai.
  showX() {
    console.log(`X: ${this.x}`);
  }

  showProtectedMethod() {
    this.protectedMethod();
  }
}

const fInstance = new F();

fInstance.showX();
fInstance.showProtectedMethod();
