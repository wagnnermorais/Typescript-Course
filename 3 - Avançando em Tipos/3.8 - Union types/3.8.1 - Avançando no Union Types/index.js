"use strict";
function showUserRole(role) {
    return typeof role === "boolean"
        ? "Usuário não aprovado!"
        : `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
