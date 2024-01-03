function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["A", "B", "C"]));
console.log(firstElement([true, false, false]));
console.log(firstElement([1, "kiwi", true]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects(
  {
    name: "Wagner",
  },
  {
    age: 24,
    job: "Front-end Developer",
  }
);

console.log(newObject);
