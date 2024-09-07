let score = 33;
// console.log(typeof score);

//if
let score1 = "83";
// console.log(typeof score1);

// convertion operation
// console.log(typeof Number(score1)); //now the string is convert in the number using Number method

//OR

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);


//not a number
let number = Number("34abs");
// console.log(typeof number);//type of value in variable
// console.log(number);// NaN it is appeared when proper number is not  given in the variable;

//null 
let number1 = Number(null);//conversion null to number
// console.log(typeof number1);//checking type of variable value number1
// console.log(number1);//output 0

//undefined
let number2 = Number(undefined);//conversion of undefined to number
// console.log(typeof number2);//checking type of variable value number2
// console.log(number2);//output NAN

//boolean value
let number3 = Number(true);//if false => 0
// console.log(typeof number3);//cheking type of variable value
// console.log(number3);//output 1


// conversion of 1 or 0 in the Boolean
let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn);//boolean conversion
// console.log(typeof booleanisLoggedIn);
//  0      => false
//  ""     => false
//  "atul" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
