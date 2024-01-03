"use strict";
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "German Shepherd");
function showDogDetails(dog) {
    "breed" in dog
        ? console.log(`Dog breed: ${dog.breed}`)
        : console.log(`No breed defined`);
}
showDogDetails(bob);
showDogDetails(turca);
