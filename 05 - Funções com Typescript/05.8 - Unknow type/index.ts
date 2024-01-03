function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(console.log(x[0]));
  } else if (typeof x === "number") {
    console.log("X é um número.");
  } else {
    console.log("X é string");
  }
}

doSomething("1");
doSomething([1, 2, 3]);
doSomething(4);
