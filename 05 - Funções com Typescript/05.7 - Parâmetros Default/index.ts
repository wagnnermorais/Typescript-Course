function sum(a: number, b = 10): number {
  return a + b;
}

console.log(sum(10));
console.log(sum(10, 30));
