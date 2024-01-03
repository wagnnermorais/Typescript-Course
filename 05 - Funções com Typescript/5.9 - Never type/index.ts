function showErrorMessage(message: string): never {
  throw new Error(message);
}

showErrorMessage("Algum erro!");
