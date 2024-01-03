function sumAllNumbers(...numbers: number[]) {
  return numbers.reduce((number, sum) => sum + number);
}

console.log(sumAllNumbers(1, 2, 3, 4, 5));
console.log(sumAllNumbers(10, 10, 10));
console.log(sumAllNumbers(25, 25, 25, 25));
