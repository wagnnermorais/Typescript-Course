interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

// fusca.wheels = 5
// Tentar atribuir um novo valor para a propriedade wheels irá disparar um erro
// Uma vez que na Interface car, ela foi definida como readonly.
