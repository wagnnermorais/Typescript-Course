interface Person {
  name: string;
  age: number;
}

interface SuperHuman extends Person {
  superPower: string[];
}

const bruce: Person = {
  name: "Bruce Wayne",
  age: 40,
};

console.log(bruce);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superPower: ["Super Saiyajin", "Kamehameha"],
};

console.log(goku);
