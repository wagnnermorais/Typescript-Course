"use strict";
function biggestNumber(arg, arg2) {
    let biggest;
    +arg > +arg2 ? (biggest = arg) : (biggest = arg2);
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("10", "5"));
