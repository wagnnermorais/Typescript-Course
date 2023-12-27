function getKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getKey(server, "ram"));
