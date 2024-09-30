// Array of numbers from 1 to 10
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use 'map' to add 10 to each number in the array
// const newNums = myNumber.map((num) => num + 10);

// Alternatively, using a block scope with 'return' keyword
// const newNums = myNumber.map((num) => {
//   return num + 10;
// });

// console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining multiple array methods
const newNums = myNumber
  .map((num) => num * 10)  // Multiply each number by 10
  .map((num) => num + 1)   // Add 1 to each result
  .filter((num) => num > 50)  // Filter numbers greater than 50
  .map((num) => num - 21); // Subtract 21 from each remaining number

console.log(newNums); // Output: Array of transformed numbers : [ 30, 40, 50, 60, 70, 80 ]
