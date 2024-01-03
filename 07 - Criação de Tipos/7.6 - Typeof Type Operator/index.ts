const username: string = "Wagner";

const username2: typeof username = "Matheus";
// const username3: typeof username = 15;
// Irá disparar um erro pois username3 está recebendo um número

// Também é possível fazer desta maneira:

type x = typeof username;

const username4: x = "João";

console.log(username, username2, username4);
