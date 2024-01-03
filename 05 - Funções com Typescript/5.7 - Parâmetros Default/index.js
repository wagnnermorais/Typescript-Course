"use strict";
function sum(a, b = 10) {
    return a + b;
}
console.log(sum(10));
console.log(sum(10, 30));
