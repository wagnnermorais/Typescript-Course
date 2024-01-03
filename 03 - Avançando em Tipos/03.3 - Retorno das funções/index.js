"use strict";
function greeting(name) {
    return `Olá, ${name}!`;
    // return 5 -> sem tipar o retorno da função, poderia ser inserido esse return de um number que nada iria impedir.
    // porém, tipando o retorno, o typescript já bloqueia e obriga a usar uma string.
}
console.log(greeting("Wagner"));
