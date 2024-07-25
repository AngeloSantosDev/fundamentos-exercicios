let readlineSync = require("readline-sync");

console.log("Insert amount in USD:");
let amountUsd = readlineSync.question("> ");

let amountEur = amountUsd / 1.0847;
let n = amountEur.toFixed(2);

console.log("O valor de " + amountUsd + "$ corresponde a " + n + "€.");