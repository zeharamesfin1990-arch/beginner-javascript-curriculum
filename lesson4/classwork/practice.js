// Problem 1
// Create a list of 4 car brands.
// Print the first and last.
// Then add another brand using push() and print the updated list.
let cars = ["ford","jeep","toyota","honda"];
cars.push("buggati")
console.log (cars);
// Problem 2
// Create a list of 5 numbers.
// Print the number at index 2.
// Then insert a new number at index 2 and print the updated list.
let number = ["1","2","3","4","5",];
number.splice (2, 0, "8");
console.log (number);
// Problem 3
// Create a list of 3 cities.
// Print the length of the list.
// Then remove one city and print the updated list.
let cities = ["seattle","los angeles","new york"];
let length = cities.length;
console.log ("number of cities:", length);
cities.splice(1, 1);
console.log (cities);
// Problem 4
// Create a list of 6 file extensions.
// Print a random one.
// Then pop one at index 3 and print the updated list.



// Problem 5
// Create a list of 5 animals.
// Use a for loop to print each animal.
let animals = ["dog", "cat","turtle","leopeord","parrot"];
for (let i = 0; i < animals.length; i++) {
    let number = animals[i];
    console.log("animals at index", i, "is", animals);
}