// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using a normal function with forEach
coding.forEach(function(val) {
    console.log(val); // Logs each programming language: js, ruby, java, python, cpp
});

// Using an arrow function with forEach
coding.forEach((val) => {
    console.log(val); // Same result as above
});

// Passing a function reference to forEach
function printMe(val) {
    console.log(val); // Logs each value using the referenced function
}

coding.forEach(printMe); // Passing the function reference directly to forEach

// Exploring forEach with index and full array
coding.forEach((val, index, arr) => {
    console.log(`Value: ${val}, Index: ${index}, Array: ${arr}`);
    // Logs each value, its index, and the entire array in each iteration
});

// Array of objects with programming language details
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "python",
        languageFileName: "py",
    }
];

// Using forEach to access object properties
myCoding.forEach((val) => {
    console.log(val.languageName); // Logs the languageName of each object in the array
});
