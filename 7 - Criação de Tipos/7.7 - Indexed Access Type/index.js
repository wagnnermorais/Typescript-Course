"use strict";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga!",
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}km`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
