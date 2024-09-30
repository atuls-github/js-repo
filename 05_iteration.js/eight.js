// Array of numbers
const myNums = [1, 2, 3];

// Using reduce to calculate the total sum of the array elements
// const myTotal = myNums.reduce(function(acc, currvel) {
//     // 'acc' is the accumulator (holds the sum of previous values)
//     // 'currvel' is the current value being processed
//     console.log(`acc: ${acc} and currval: ${currvel}` );
//     return acc + currvel; // Add the current value to the accumulator
// }, 0); // '0' is the initial value for the accumulator

// Simplified version using an arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal); // Output: 6 (1+2+3)

// Array representing a shopping cart with item names and prices
const shoppingCart = [
    {
        itemsName: "Js course",
        price: 1399,
    },
    {
        itemsName: "Python course",
        price: 1699,
    },
    {
        itemsName: "DevOps course",
        price: 1299,
    },
    {
        itemsName: "Data Science course",
        price: 1999,
    }
];

// Using reduce to calculate the total price of all items in the shopping cart
const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total); // Output: 6396 (sum of all item prices)
