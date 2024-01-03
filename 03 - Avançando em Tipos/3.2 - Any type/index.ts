const arr: any = [1, 2, "Teste", [], { nome: "Wagner" }];

console.log(arr);

arr.push(10, "Kiwi", true);
arr.push([...arr, 1, 2, 3], ["Green", "Yellow", "Red"]);

console.log(arr);
