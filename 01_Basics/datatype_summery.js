//primitive datatype

//  7 Types : String, Number, Boolean, null, undefined, symbol, BigInt
//declaring variable
const name = "rajesh" //string
const score = 100;//number
const scoreValue = 56;
const isLoggedIn = false; //OR true //boolean
const outSideTemp = null;
let userEmail; //undefined value //declaration with "const" =>must be initialize

const Id = Symbol('123');//declare "symbol datatype"
const anotherId = Symbol('123');//declare "symbol datatype"

// console.log(Id == anotherId);//false //both are different



//Reference Type (Non primitive type)
   // Arrays, Objects, Functions

const myHeros =["shaktiman","naageaj","doga"];//declare Array

const myobj = {                //declare object
    myName : "rajesh",
    age : 18,
}                           

const myFunction = function(){        //declare function
    // console.log("function created")
    }
myFunction();  // Output: function created

//find data type
 // console.log(typeof /*variable*/ anotherId);

/*-------------------------------------------------------------------*/

//stack(primitive) and heap(NON primitive)

//primitive
let operatingSystem = "ubuntu";

let anotherOne = operatingSystem;
anotherOne = "Windows";

console.log(anotherOne);
console.log(operatingSystem);

//heap
let userOne = {
    Name : "rajesh",
    Age : 11,
    email : "123@google.com",

}

let userTwo = userOne; //the userTwo refer the userOne data

userTwo.email = "rajesh@gmail.com";

console.log(userOne);//we create an object in which userOne is refered
console.log(userTwo);//same here userTwo also refer to the userOne data


