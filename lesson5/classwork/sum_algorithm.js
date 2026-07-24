 numbers = [6, 5, -8, 4, 3, -3, -1];
console.log(numbers);

let total = 0;
for (let i = 0; i < numbers.length; i++) {  // Go through each index in the array
    let item = numbers[i]; // Get the number at this index
    total = total + item;  // Add it to the running total
}
console.log(total);

// Find the sum of only positive numbers.
total = 0;
for (let i = 0; i < numbers.length; i++) {  // Go through each index in the array
    let item = numbers[i]; // Get the number at this index
    if (item > 0) {  // Positive means > 0
        total = total + item;
    }
}
console.log(total);