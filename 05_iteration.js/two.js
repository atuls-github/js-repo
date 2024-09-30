// Initialize index to 0
let index = 0;

// First while loop: increments index by 2 on each iteration and runs until index > 10
while (index <= 10) {
    // Print the current value of index
    console.log(`value of index is ${index}`);
    
    // Increment index by 2
    index = index + 2;
}

let myArray = ['flash', 'batman', 'superman']; // Array of superhero names

// Initialize arr to 0 (used as index for myArray)
let arr = 0;

// Second while loop: iterates through the array and prints each element
while (arr < myArray.length) {
    // Print the current element in myArray
    console.log(`Value is ${myArray[arr]}`);
    
    // Increment arr by 1 to move to the next element
    arr = arr + 1;
}

// Initialize score to 0
let score = 0;

// do-while loop: increments score by 1 and runs at least once even if condition is false
do {
    // Print the current value of score
    console.log(`Score is ${score}`);
    
    // Increment score by 1
    score++;
    
} while (score <= 10); // The loop continues as long as score <= 10
