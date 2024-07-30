let readlineSync = require("readline-sync");

console.log("Pick a number:");
let number = readlineSync.question("> ");

let counter = 0;

for (let i = 1; i <= number; i++) {
    counter =+ i;
    console.log(counter + " + ");
}
