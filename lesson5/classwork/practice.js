// Problem 1
// Count how many times "Alex" appears in the list.



// Problem 2
// Search for "elephant" in the list and print if it's found.
let fruits = ["banana", "passonfruit", "elephent", "mango"];

let found = false;
let index = -1;

for (let i = 0; i < fruits.length; i++) {  
    if (fruits[i] === "elephent") {  
        found = true;  
        index = i;  
        break; 
    }
}

if (found === true) {
    console.log("Found elephent at", index);
} else {
    console.log("No elephent in the array");
}



// Problem 3
// Find and print the sum of all the numbers greater than 25 in the list.


// Problem 4
// Find and print the biggest number in the list.
let number = [7, 43, 4, 15, 21];
console.log(number);

let biggest = number[0];
for (let i = 0; i < number.length; i++) {
    if (number[i] > biggest) {
        biggest = number[i];
    }
}

console.log("The biggest item:", biggest);


// Problem 5
// Count how many even numbers are in the list.


