let readlineSync = require("readline-sync");

console.log("Price for night:");
console.log("1. Normal room: 90€");
console.log("2. Deluxe room: 120€");
console.log("3. Deluxe suites: 150€");
console.log("Which room do you choose?");
let roomChoise = readlineSync.question("(1, 2 or 3) > ");

console.log("How many nights would you like to stay?");
let numberNights = readlineSync.question("> ");

console.log("How many guests you have?")
let guests = readlineSync.question("(0, 1 or max. 2) > ");

let costPerNight = 1;
let discountRate = 1;

if (roomChoise == 1) {
    costPerNight = 90;
} else if (roomChoise == 2) {
    costPerNight = 120;
} else if (roomChoise == 3) {
    costPerNight = 150;
} else {
    costPerNight = 90;
}

if (guests == 1) {
    costPerNight += 10;
} else if (guests == 2) {
    costPerNight += 10 * 2;
}

if (numberNights >= 15) {
    discountRate = 0.80;
} else if (numberNights >= 10) {
    discountRate = 0.85;
} else if (numberNights >= 5) {
    discountRate = 0.90;
}

let costNight = costPerNight * numberNights;
console.log(costNight);
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
    console.log("The total cost for " + numberNights + " nights with breakfast is " + costBreakfast + "€." );
} else {
    console.log("The total cost for " + numberNights + " nights is " + costNight + "€." );
}
