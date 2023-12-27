type fiveNumbers = [number, number, number, number, number];
type mixedItems = [number, string, boolean, object, string[]];

const numberArray: fiveNumbers = [1, 2, 3, 4, 5];
const mixedArray: mixedItems = [
  10,
  "Coffee",
  true,
  { coffee: "empty" },
  ["Coffee", "Code", "Sleep"],
];

console.log(numberArray, mixedArray);
