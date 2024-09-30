// List of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach to iterate over 'coding' array
// 'forEach' does not return any value, it simply executes a function on each array element
const values = coding.forEach((item) => {
  // This will print each language in the array but is commented out for now
  // console.log(item);
});

// 'values' will be undefined because 'forEach' doesn't return anything
// console.log(values); // Output: undefined

// Array of numbers from 1 to 10
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using 'filter' to create a new array with numbers greater than 4
// const newNums = myNums.filter((num) => num > 4);

// This is an alternate way of using 'filter' with a block function
// const newNums = myNums.filter((num) => {
//     return num > 4;
// });

// Using 'forEach' to achieve similar results as 'filter' by pushing values to a new array
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num); // Add numbers greater than 4 to the 'newNums' array
  }
});
// console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

// Array of book objects with title, genre, publish year, and edition year
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// Filter books with the genre 'History'
let userBooks = books.filter((bk) => bk.genre === 'History');

// Another filter example to get 'History' books published after 1995
// userBooks = books.filter((bk) => {
//     return bk.publish >= 1995 && bk.genre === 'History';
// });

console.log(userBooks); // Output: List of books with the genre 'History'
