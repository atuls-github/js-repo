// console.log("a");
// console.log("n");
// console.log("u");
// console.log("j");
//let make function to print this 

function sayMyName(){
    // console.log("a");
    // console.log("n");
    // console.log("u");
    // console.log("j");
}
// sayMyName();  //calling function 

// function addTwoNumbers(number1,number2){
    // console.log(number1 + number2);
    
// }
// addTwoNumbers(); //output : NaN => Not a number :we need to give some arguments to get some output
// addTwoNumbers(3,4); //calling funciton with the arguments 3 and 4
                       //in the above function js donot know the datatype so this is not perfect "for improve this we use the conditional statement to check the datatype of the parameters"
// ouput of some value 
 // addTwoNumbers(3, "a"); //output : 3a
// addTwoNumbers(3, null);//output : 3


// const result = addTwoNumbers(3,4); //store the value of reference to result variable
// console.log(result); //output : undefined //because in function we need to resturn the value to assign the value to another variable


function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
    
}
const result = addTwoNumbers(3,4);
//now we can print result beacuse we return the value from the function
// console.log("Result:",result);



//user login function
// function loginUser(username){
//     return `${username} just loggedIn`
// }
// console.log(loginUser("anuj")); //output : anuj just loggedIn //this is the simple function there is issue of either user put the undefined value so will the output : for that we use the conditional statement to check the datatype of the variable

// function loginUser(username){
//     if(username === undefined || username === null){
//         console.log("please enter the username");
//         return;//to avoid print below code
//         }
//     return `${username} just loggedIn`
// }
// console.log(loginUser("anuj"));

//giving default value to function
function loginUser(username= "default_name"){
        return `${username} just loggedIn`
    }
    // console.log(loginUser());


//to add the cart price of undefined number of items
function calculateCartPrice(...num1) {
    // Use the reduce method to sum up all the values in num1 (which is now an array)
    return num1.reduce((a, b) => a + b, 0);
}

const sum = calculateCartPrice(200, 400, 500);
// console.log(sum);  // Output: 1100


// funtion with Object

const user = {
    username : "anuj",
    price :199,
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user); //instead of write the object_name we can directly create a new object right here

//function with array
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // This will return the second element
}

console.log(returnSecondValue(myNewArray)); //output: 400 //or we can pass array[] values for example :
console.log(returnSecondValue([100, 200, 300, 400]));


