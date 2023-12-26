// prettier-ignore
function showProductDetails({ name, price }: {name: string, price: number}): string {
  return `O nome do produto é: ${name}, e seu valor é R$${price}`;
}

const shirt = { name: "Camisa", price: 89.9 };

console.log(showProductDetails(shirt));
