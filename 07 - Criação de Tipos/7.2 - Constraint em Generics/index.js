"use strict";
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const door = { name: "Porta", cor: "Branca" };
const cars = { name: "Carro", wheels: 4, engine: 1.5 };
const clothing = { price: 39.99, cor: "Branca", category: "Roupa" };
console.log(showProductName(door));
console.log(showProductName(car));
// console.log(showProductName(clothing))
// As duas primeiras funções vão funcionar, porém, a última, irá disparar um erro pois não possui a propriedade name.
