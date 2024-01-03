// fazendo o get de algum suposto elemento DOM

const value = document.getElementById("element");

// dessa forma, o typescript acusa o erro que o valor é possivelmente "Nulo"
// console.log(value.innerText)
// a solução é usando o non-null operator

console.log(value!.innerText);
