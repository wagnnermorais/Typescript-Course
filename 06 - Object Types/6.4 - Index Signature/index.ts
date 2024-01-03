interface Coordinates {
  [index: string]: number;
}

let coordinates: Coordinates = {
  x: 10,
};

coordinates.y = 15;

console.log(coordinates);
