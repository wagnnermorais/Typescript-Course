class User {
  name!: string;
  age!: number;
}

const wagner = new User();

wagner.name = "Wagner";
wagner.age = 24;

console.log(wagner);
