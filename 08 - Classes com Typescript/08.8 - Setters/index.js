"use strict";
class Coordinates {
    set fillX(x) {
        x === 0 ? "" : (this.x = x);
    }
    set fillY(y) {
        y === 0 ? "" : (this.y = y);
    }
    get getCoordinates() {
        return `X: ${this.x} | Y: ${this.y}`;
    }
}
const coordinates = new Coordinates();
coordinates.fillX = 15;
coordinates.fillY = 10;
coordinates.getCoordinates;
console.log(coordinates);
console.log(coordinates.getCoordinates);
