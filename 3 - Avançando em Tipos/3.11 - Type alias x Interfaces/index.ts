interface Person {
  name: string;
}

// adicionando a propriedade "age" a interface Person, desta forma, assim como em javascript, não é criado um objeto novo, mas sim, adicionado ao original, por isso "age" será necessário em qualquer Person foi/for criado.

interface Person {
  age: number;
}

const person: Person = {
  name: "Wagner",
  age: 23,
};

type personType = {
  name: string;
};

// type personType = {
//   age: number;
// };
// Irá disparar um erro pois não pode ser duplicado. "Duplicate identifier 'personType'."
