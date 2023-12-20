function showBalance(balance: string | number) {
  console.log(`O saldo da conta é: R$${balance}`);
}

showBalance(500);
showBalance("500");

const balance: Array<number | string> = [4.25, "R$ 4.000,00."];

console.log(balance);
