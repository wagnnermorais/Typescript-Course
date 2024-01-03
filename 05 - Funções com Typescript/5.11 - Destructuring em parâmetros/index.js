"use strict";
// prettier-ignore
function showProductDetails({ name, price }) {
    return `O nome do produto é: ${name}, e seu valor é R$${price}`;
}
const shirt = { name: "Camisa", price: 89.9 };
console.log(showProductDetails(shirt));
