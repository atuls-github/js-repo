// singleton
//Object.create



// object literals


//declare object
// const variable = new object {};
// const variable = {};


const mysym = Symbol("key1");

const JsUser ={
    name : "atul", //javascript define name as a string
    "full name" : "atul yadav", //to acces this element , the only method is to use 'JsUser["full name"] '
    [mysym] : "key1",
    age : 21,
    location : "gurgaon",
    email : "atulyadav@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser);//access the all data of object
// console.log(JsUser.email);//accessing one element of object


// console.log(JsUser["email"]);//another way to access the object element //best practice
// console.log(JsUser["full name"]);

//change in object element value
// JsUser.email = "atulsingh@google.com";
// console.log(JsUser["email"]);

//freeze the value of object element
// Object.freeze(JsUser);//freeze the object
// JsUser.email = "atulyadav@chatgpt.com";//no change can happen
// console.log(JsUser["email"]);//not change in object email

//output of object 
// console.log(JsUser);


//add greating the user name with function
JsUser.greeting = function(){
    console.log("hello JS user")
    
}
console.log(JsUser.greeting());

//another one
JsUser.greeting1 = function(){
    console.log(`Hello  JS user,${this.name}`)
    
}
console.log(JsUser.greeting1())


