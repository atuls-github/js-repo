// Object with key-value pairs
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by app",
};

// Using for...in to iterate over object keys
for (const key in myObject) {
    console.log(key); // Logs each key: js, cpp, rb, swift
}

for (const key in myObject) {
    console.log(myObject[key]); // Logs the values: javascript, C++, ruby, swift by app
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); 
    // Logs: js shortcut is for javascript, cpp shortcut is for C++, etc.
}

// Using for...in with an array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key); // Logs the index of each element: 0, 1, 2, 3, 4
}

// If you want to log the values instead of indices in the array, you can do:
for (const key in programming) {
    console.log(programming[key]); // Logs the values: js, rb, py, java, cpp
}

// Attempting to use for...in on a Map
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");

// for...in doesn't work on Map, as Map is not iterable with for...in
for (const key in map) {
    console.log(key); // This will not work as expected and should be avoided
}

// Correct way: Use for...of to iterate over Map
for (const [key, value] of map) {
    console.log(`${key}: ${value}`); // Logs: IN: India, USA: United States of America, UK: United Kingdom
}
