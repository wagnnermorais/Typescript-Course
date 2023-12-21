"use strict";
function operations(arr, operation) {
    if (operation) {
        switch (operation) {
            case "sum":
                const sum = arr.reduce((i, total) => i + total);
                console.log(sum);
                break;
            case "subtraction":
                const subtraction = arr.reduce((i, total) => i - total);
                console.log(subtraction);
                break;
            case "multiply":
                const multiply = arr.reduce((i, total) => i * total);
                console.log(multiply);
                break;
            case "divide":
                const divide = arr.reduce((i, total) => i / total);
                console.log(divide);
                break;
        }
    }
    else {
        console.log("Por favor, insira alguma operação.");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([10, 1, 2], "subtraction");
operations([5, 5, 4], "multiply");
operations([30, 2, 1], "divide");
