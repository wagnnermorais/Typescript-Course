function fullNameGreeting(firstName: string, lastName?: string) {
  return lastName !== undefined
    ? `Bem-vindo(a), ${firstName} ${lastName}!`
    : `Bem-vindo(a), ${firstName}!`;
}

console.log(fullNameGreeting("Wagner", "Morais"));
console.log(fullNameGreeting("Wagner"));
