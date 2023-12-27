interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const value: myType = 5;
// const value2: myType = "Teste";
// Irá acusar um erro pois B tem herença de A, então seu tipo é number e não string.

type myType2 = Teste extends { showNumber(): number } ? string : boolean;
