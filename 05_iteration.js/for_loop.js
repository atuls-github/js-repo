//for

for (let i = 0; i <= 10; i++) {
  // Loop that starts with i = 0 and runs as long as i is less than or equal to 10, incrementing i by 1 in each iteration.

  const element = i; // Assign the current value of i to a constant called element

  if (element == 5) {
    // If element is equal to 5, this block will execute
    // console.log("5 is best number"); // Print a message when element is 5
    continue; // Skip the rest of the loop body and move to the next iteration
  }

  // console.log(element); // Print the value of element for all values except 5
}

for (let i = 0; i <= 10; i++) {
  // Outer loop starts at 0 and runs until i reaches 10, incrementing i by 1 in each iteration

  // console.log(`outer loop value : ${i}`);
  // Logs the current value of the outer loop (i)

  for (let j = 0; j <= 10; j++) {
    // Inner loop starts at 0 and runs until j reaches 10, incrementing j by 1 in each iteration
    // console.log(`inner loop value ${j} and outer loop value ${i}`);
    // Uncomment this line to log both inner loop (j) and outer loop (i) values together
    // console.log(`${i} * ${j} = ${i * j}`);
    // Logs the multiplication of the outer loop value (i) with the inner loop value (j)
  }
}

let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element);
}

//break and continue

// First loop using break
for (let index = 1; index <= 20; index++) {
  // Loop starts from 1 and runs until index is less than or equal to 20

  if (index == 5) {
    // If the current value of index is 5, this block will execute
    console.log(`Detected : ${index}`);
    break;  // Exit the loop immediately when index is 5
  }

  console.log(`value of i is ${index}`);
  // If index is not 5, this line prints the value of index
}

console.log('--- Second Loop with continue ---');

// Second loop using continue
for (let index = 1; index <= 20; index++) {
  // Another loop that starts from 1 and runs until index is 20

  if (index == 5) {
    // If the current value of index is 5, this block will execute
    console.log(`Detected : ${index}`);
    continue;  // Skip the rest of the loop and go to the next iteration when index is 5
  }

  console.log(`value of i is ${index}`);
  // This line will print the value of index for all values except 5, since continue skips index 5
}

