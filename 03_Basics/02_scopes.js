// var c = 300;
// var a = 400;
if(true){
    let a= 10;
    let b= 20;
    // console.log("INNER",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username ="anuj"
    function two(){
        const website =" youtube"
        // console.log(username + website);
        
    }
    //console.log(website); //not defined // value in block scope of two()
    two()
    
}
one()


// as it is in the if()
if(true){
    let username = "anuj"
    if(username === "anuj"){
        let website = " youtube";
        //console.log(username + website);
    }
    // console.log(website); //not defined //not in block scpoe of nested if()
    
    
}
//console.log(username);//not defined //not in block scpoe of nested if()


//++++++++++++++++++++++++interesting+++++++++++++++++++++++

function addone(num){
    return num + 1
}
addone(5);

const addTwo = function(num){
    return num +2;
}
addTwo(5);

