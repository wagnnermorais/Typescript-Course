"use strict";
function showErrorMessage(message) {
    throw new Error(message);
}
showErrorMessage("Algum erro!");
