let readlineSync = require("readline-sync");

console.log("Price for night is 90€.");
console.log("How many nights would you like to stay?")
let numberNights = readlineSync.question("> ");
console.log("Would you like to include breakfast?")
let breakfast = readlineSync.question("(y/n) > ");
let costNight = 90 * numberNights;
if (breakfast == "y") {
    let costBreakfast = 10 + costNight;
    console.log("The total cost for " + numberNights + " with breakfast is " + costBreakfast + "€." );
} else {
    console.log("The total cost for " + numberNights + " nights is " + costNight + "€." );
}
