"use strict";
function showUserDetails(user) {
    switch (user.role) {
        case "admin":
            console.log(`Seja bem-vindo, ${user.email}, seu acesso atual: Administrador.`);
            break;
        case "developer":
            console.log(`Seja bem-vindo, ${user.email}, seu acesso atual: Desenvolvedor.`);
            break;
        case "reader":
            console.log(`Seja bem-vindo, ${user.email}, seu acesso atual: Leitor.`);
            break;
        default:
            console.log(`Seja bem-vindo, ${user.email}! Você possui o acesso de visitante.`);
    }
}
const adminUser = {
    email: "wagnermoraiscnt@mail.com",
    role: "admin",
};
const developerUser = {
    email: "matheusbattisti@mail.com",
    role: "developer",
};
const readerUser = {
    email: "vinicius@mail.com",
    role: "reader",
};
const noRoleUser = {
    email: "daniel@mail.com",
};
showUserDetails(adminUser);
showUserDetails(developerUser);
showUserDetails(readerUser);
showUserDetails(noRoleUser);
