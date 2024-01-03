var firstName = "Wagner";
var lastName = 1;
var x = true;
function greeting(name) {
    console.log("Ol\u00E1, ".concat(name));
}
greeting(firstName);
greeting(lastName);
greeting(x);
