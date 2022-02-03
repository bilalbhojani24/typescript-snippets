"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printCarDetails(model) {
    console.log(model.toString());
    console.log((model || 'NO DATA').toString());
}
printCarDetails(null);
