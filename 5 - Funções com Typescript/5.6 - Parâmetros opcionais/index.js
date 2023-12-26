"use strict";
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá, ${greet} ${name}! Seja bem-vindo(a)!`;
    }
    return `Olá, ${name}! Seja bem-vindo(a)!`;
}
console.log(modernGreeting("Wagner"));
console.log(modernGreeting("Wagner", "Dr."));
console.log(modernGreeting("Han", "Sr."));
