let fruits = ["banana", "passonfruit", "apple", "mango"];

// Find if apple in array and print its index

let found = false;
let index = -1;

for (let i = 0; i < fruits.length; i++) {  // Go through each item in the array
    if (fruits[i] === "apple") {  // If the current item is apple
        found = true;  // Mark as found
        index = i;  // Save the index
        break; // Exit the loop after finishing
    }
}

if (found === true) {
    console.log("Found apple at", index);
} else {
    console.log("No apples in the array");
}