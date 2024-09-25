const user = {
    username :"anuj",
    website : "youtube",
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
 
}
// user.welcomeMessage();
user.username="sam";
// user.welcomeMessage();
// console.log(this); output : {} //an empty object


// function chai (){
//     let usrname ="anuj"
//     // console.log(this.username);//output : undefined //this work only in objects
// }
// chai()


//arrow function
const chai = () => {
    let username = "anuj"
    // console.log(this);//output : {}
}
chai()

// syntax of arrow funtion : '() => {}'
//hold the value on variable so...
    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }
    // console.log(addTwo(3,5));


//implicit return
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,5));



