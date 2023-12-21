function greeting(name: string) {
  return `Olá, ${name}!`;
}

function preGreeting(fn: (name: string) => string, username: string) {
  console.log("Preparando a função!");

  const greet = fn(username);
  console.log(greet);
}

preGreeting(greeting, "Wagner");
