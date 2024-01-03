"use strict";
let arr = ["Maçã", "Laranja", "Banana"];
// arr[3] = "Mamão";
// Ira disparar um erro pois não é possível adicionar um novo item por ser apenas readonly
// Porém, métodos de modificação ou iteração são possíveis.
arr.forEach((fruit) => {
    console.log(`Fruta: ${fruit}`);
});
arr = arr.map((item) => {
    return `Fruta: ${item}`;
});
console.log(arr);
