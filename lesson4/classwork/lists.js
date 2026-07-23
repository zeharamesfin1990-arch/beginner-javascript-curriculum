let colors = [ "red", "blue", "green", "purple"];
console.log (colors); // prints everything in colors


// arrays an 0 indexed
// how to acess items in iddexed
console.log (colors [0]); // first item
console.log (colors [1]); // secound item
console.log (colors [2]); // third item
console.log (colors [3]); // fourth item

// when it is our of aray it gives un difined
console.log (colors [10]);

colors[2] = "yellow"; // this is how to change item in specific index

colors.push ("orange");
console.log (colors);

colors.splice(2, 0, "pink");  // startIndex, deleteCount, itemToAdd
console.log("After insert at index 2:", colors);

// Reemove an item at a specific index
colors.splice(1, 1);  // startIndex, deleteCount
console.log("After removing 'green':", colors);

console.log("Length of the array:", colors.length);  // Get the number of items in the array