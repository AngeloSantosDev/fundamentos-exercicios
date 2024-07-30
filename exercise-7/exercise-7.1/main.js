let readlineSync = require("readline-sync");

console.log("Price for night is 90€.");
console.log("How many nights would you like to stay?")
let numberNights = readlineSync.question("> ");
console.log("The total cost for " + numberNights + " nights is " + 90 * numberNights + "€." );