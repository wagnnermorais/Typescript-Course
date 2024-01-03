function showNumbers(a: number, b: number, c?: number) {
  console.log(`A: ${a}`);
  console.log(`B: ${b}`);
  if (c) {
    console.log(`C: ${c}`);
  }
  console.log("-------");
}

showNumbers(10, 20, 30);
showNumbers(10, 20);
