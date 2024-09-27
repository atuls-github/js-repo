//control flow :
//if

// if(condition)
//     {code}

const isuserloggedIn =true;

if(isuserloggedIn){
    // console.log("welcome to website");
}

// <, >, <=, >=, ==, !=, ===, !==

const temperature = 41;
if(temperature <50){
    // console.log("less than 50");
    
}
else{//console.log("temperature is greater than 50");
}

// -----------------------------------------------------------

const score = 200;

if(score > 100){
    let power = "fly"
    // console.log(`power of ${power}`);
    }
else{
    // console.log(`you cannot ${power}`);
    }
// ---------------------------------------------------------------------------


//short hand

const balance = 1000
//if(balance > 500)console.log("test1"),console.log("test2");//this is bad practice
// ----------------------------------------------------------------------

if(balance < 500){
    // console.log("less than ");
}else if(balance <750){
    // console.log("less than 750");
}else{
    // console.log("more than 750");
}
// -----------------------------------------------------------------------------

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
