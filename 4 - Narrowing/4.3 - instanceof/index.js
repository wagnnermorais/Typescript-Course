"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const user = new User("Matheus");
const user2 = new SuperUser("Wagner");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Bem-vindo, ${user.name}! Deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Bem-vindo, ${user.name}`);
    }
}
userGreeting(user);
userGreeting(user2);
