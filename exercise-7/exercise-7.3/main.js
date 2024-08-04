let readlineSync = require("readline-sync");

console.log("Price for night is 90€.");
console.log("How many nights would you like to stay?");
let numberNights = readlineSync.question("> ");
let costNight = 90 * numberNights;
let discountRate = 1;

if (numberNights >= 15) {
    discountRate = 0.80;
} else if (numberNights >= 10) {
    discountRate = 0.85;
} else if (numberNights >= 5) {
    discountRate = 0.90;
}

let discountNight = costNight * discountRate;
let discountPercentage = ((1 - discountRate) * 100).toFixed(0);

if (numberNights >= 5) {
    console.log("For sleeping " + numberNights + " nights, you get a " + discountPercentage + "% discount, the stay will cost " + discountNight + "€.");
} else {
    console.log("For sleeping " + numberNights + " nights, the stay will cost " + discountNight + "€.");
}


console.log("Would you like to include breakfast?");
let breakfast = readlineSync.question("(y/n) > ");

if (breakfast == "y") {
    let costBreakfast = 10 + discountNight;
    console.log("The total cost for " + numberNights + " with breakfast is " + costBreakfast + "€." );
} else {
    console.log("The total cost for " + numberNights + " nights is " + costNight + "€." );
}
