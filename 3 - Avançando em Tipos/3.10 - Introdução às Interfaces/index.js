"use strict";
function showCoordinates(coordinates) {
    console.log(`X coordinate: ${coordinates.x}`);
    console.log(`Y coordinate: ${coordinates.y}`);
    console.log(`Z coordinate: ${coordinates.z}`);
    console.log("------------------------------");
}
// Duas formas para imprimir os valores
// 1 - passando diretamente na função.
showCoordinates({ x: 40.689247, y: -74.044502, z: 2.29435 });
// 2 - Criando um objeto e dando o tipo da interface.
const coordinates = {
    x: 45.689247,
    y: -71.044502,
    z: 22.29435,
};
showCoordinates(coordinates);
