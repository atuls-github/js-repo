//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false;  // Notice the semicolon instead of a comma

// console.log(tinderUser);

// Nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary",
        }
    }
}

// Accessing nested objects firstname
// console.log(regularUser.fullname.userfullname.firstname);


// combine objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// combining ways
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2);//{} => this is the taget object to assign the all other objects as source obj1 and obj2
const obj3 ={...obj1,...obj2};//spread operator  to combine the objects
// console.log(obj3);

//values from the database like this in the array
// const users = [
//     {
//         id:1,
//         email : "h@gmail.com",
//     }
//     {
//         id:2,
//         email : "k@gmail.com",
//     }
//     {
//         id:3,
//         email : "l@gmail.com",
//     }

// ]

console.log(tinderUser);
//some methods

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser));

//check the property 
console.log(tinderUser.hasOwnProperty("isLoggedIn"));



