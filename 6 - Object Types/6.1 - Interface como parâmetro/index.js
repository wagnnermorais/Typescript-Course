"use strict";
// Caso haja mais de uma função que use os mesmos parâmetros, para evitar repetição de código, pode ser padronizado
// em apenas um local, deixando o código mais limpo e, mais fácil para dar manutenção, seja criando novos parâmetros ou removendo
// uma vez que está centralizado em apenas um local.
// Ficando dessa forma:
function showProductDetails(product) {
    !product.isAvailable
        ? console.log("O produto está indisponível!")
        : console.log(`O nome do produto é: ${product.name}, e seu preço é $${product.price}`);
}
function changeProductDetails(product) { }
function createProductDetails(product) { }
// E não dessa:
// function showProductDetails(name: string, price: number, isAvailable: true) {}
// function changeProductDetails(name: string, price: number, isAvailable: true) {}
// function createProductDetails(name: string, price: number, isAvailable: true) {}
const shirt = {
    name: "Groove Street T-Shirt",
    price: 59.99,
    isAvailable: true,
};
const cowboyHat = {
    name: "Cow-Boy Hat",
    price: 39.9,
    isAvailable: false,
};
showProductDetails(shirt);
showProductDetails(cowboyHat);
