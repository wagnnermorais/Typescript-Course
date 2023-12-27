"use strict";
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "hasDriveLicense"));
