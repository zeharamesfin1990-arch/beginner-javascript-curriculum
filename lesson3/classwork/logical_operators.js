let age = 14;
let has_ticket = "yes";

if (age >= 13 && has_ticket === "yes") {  // AND: both conditions must be true
    console.log("You can enter the PG-13 movie.");
} else {
    console.log("Sorry, you can't enter.");
}
console.log("Movie check complete.");


let has_pass = "no";
let has_coins = "yes";

if (has_pass === "yes" || has_coins === "yes") {  // OR: at least one condition must be true
    console.log("You can ride the bus.");
} else {
    console.log("You can't ride the bus.");
}
console.log("Bus check complete.");

let homework_done = "no";

if (!(homework_done === "yes")) {
    console.log("Go finish your homework!");
} else {
    console.log("Nice job! You're all done.");
}
console.log("Homework check complete.");