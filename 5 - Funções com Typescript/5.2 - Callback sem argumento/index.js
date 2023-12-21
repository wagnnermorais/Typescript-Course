"use strict";
function greeting(name) {
    return `Olá, ${name}!`;
}
function preGreeting(fn, username) {
    console.log("Preparando a função!");
    const greet = fn(username);
    console.log(greet);
}
preGreeting(greeting, "Wagner");
