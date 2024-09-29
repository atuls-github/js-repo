// Using for...of on an array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num); // This will log each number in the array (1, 2, 3, 4, 5)
}

// Using for...of on a string
const greetings = "Hello world!";

for (const greet of greetings) {
    console.log(`each char is ${greet}`); // This will log each character in the string
}

// Using for...of on a Map
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");

for (const [key, value] of map) {
    console.log(key, ':-', value); // Logs key-value pairs from the map (e.g., IN :- India)
}

// Attempting for...of on an object directly will throw an error
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
    'game3': 'Deadpool',
};

// Uncommenting this will throw an error because for...of doesn't work on plain objects
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// Correct way: Using Object.entries() to convert object into iterable key-value pairs
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value); // Logs key-value pairs from the object
}
