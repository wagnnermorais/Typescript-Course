"use strict";
function fullNameGreeting(firstName, lastName) {
    return lastName !== undefined
        ? `Bem-vindo(a), ${firstName} ${lastName}!`
        : `Bem-vindo(a), ${firstName}!`;
}
console.log(fullNameGreeting("Wagner", "Morais"));
console.log(fullNameGreeting("Wagner"));
