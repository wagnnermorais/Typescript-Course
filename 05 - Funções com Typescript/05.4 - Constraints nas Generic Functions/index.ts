function biggestNumber<T extends number | string>(arg: T, arg2: T): T {
  let biggest: T;

  +arg > +arg2 ? (biggest = arg) : (biggest = arg2);

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("10", "5"));
