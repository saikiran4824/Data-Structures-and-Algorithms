// JavaScript Array Methods - Examples with Comments

let arr = [10, 20, 30, 40, 50];

// ------------------ Adding & Removing Elements ------------------
arr.push(60);  // Adds 60 at the end
arr.pop();     // Removes last element (50)
arr.unshift(5); // Adds 5 at the beginning
arr.shift();   // Removes first element (5)

// ------------------ Extracting Elements ------------------
let sliced = arr.slice(1, 3); // Extracts elements from index 1 to 2 (not 3)
arr.splice(2, 1, 35); // Replaces element at index 2 with 35

// ------------------ Searching for Elements ------------------
let index = arr.indexOf(30);  // Returns index of 30
let exists = arr.includes(20); // Checks if 20 exists (true/false)
let found = arr.find(num => num > 25); // First number > 25
let foundIndex = arr.findIndex(num => num > 25); // Index of first number > 25

// ------------------ Sorting & Reversing ------------------
arr.sort((a, b) => a - b); // Sorts in ascending order
arr.reverse(); // Reverses the array order

// ------------------ Iterating Over Arrays ------------------
arr.forEach(num => console.log(num * 2)); // Logs each number * 2
let mapped = arr.map(num => num ** 2); // Creates a new array with squares
let filtered = arr.filter(num => num > 20); // Filters numbers > 20
let sum = arr.reduce((acc, num) => acc + num, 0); // Sums up array elements

// ------------------ Combining & Splitting ------------------
let arr2 = [100, 200];
let combined = arr.concat(arr2); // Merges two arrays
let joined = arr.join(" - "); // Joins elements with " - "
let str = "apple,banana,grape";
let fruits = str.split(","); // Splits string into an array

console.log({ arr, sliced, index, exists, found, foundIndex, mapped, filtered, sum, combined, joined, fruits });
