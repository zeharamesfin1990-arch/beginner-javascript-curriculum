let numbers = [7, 43, 4, 15, 21];
console.log(numbers);

let biggest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i];
    }
}

console.log("The biggest item:", biggest);