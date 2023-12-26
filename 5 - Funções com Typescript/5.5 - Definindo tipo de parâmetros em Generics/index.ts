function mergeArray<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

// dessa forma o typescript irá acusar um erro, pois o primeiro array foi determinado como numérico.
// console.log(mergeArray([1, 2, 3], ["Teste", "Testando"]));

// determinando os tipos, é possível mesclar o array com mais de um tipo recebido.
console.log(mergeArray<number | string>([1, 2, 3], ["Teste", "Testando"]));
