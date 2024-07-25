let readlineSync = require("readline-sync");

console.log("What is your name?");
let username = readlineSync.question("> ");

console.log("Hello " + username + ", welcome to the Learn to Code course.");