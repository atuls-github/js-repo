const score = 500;
console.log(score);

const balance = new Number (100.0051151);
console.log(balance);// output : 100.0051151

console.log(balance.toString());// output : 100.0051151
console.log(balance.toFixed(2));// output : 100.01


const numberOne = 123.43345;
console.log(numberOne.toPrecision(4));//123.4  //focusing on given number 
console.log(numberOne.toPrecision(2));//Output : 1.2e+2

const numberTwo = 100000000000000;
console.log(numberTwo.toLocaleString());//output : 100,000,000,000,000 //folloe US standard rule

console.log(numberTwo.toLocaleString('en-IN')); //10,00,00,00,00,00,000 //indian standard


/*******************************Math*********************************/
console.log(Math);//Object

console.log(Math.abs(-98));//output : 98 //abs() return always positive value

console.log(Math.round(4.9))//output : 5 //round off the  value

console.log(Math.ceil(4.1));// output : 5 //return greater nearest value of given value

console.log(Math.floor(4.9));// output : 4 //return lower nearest value

console.log(Math.trunc(54.6454));//output : 54 //return always the before decimal value

console.log(Math.sign(88));//output : 1  //return and show the value is positive or negative or null by "1" "-1" "0"

console.log(Math.pow(7,8));//output : 5764801  //return the power of (x,y) means x power of y

console.log(Math.min(8,5,7,2,6,1)); //output : 1 //minimum value
console.log(Math.max(8,5,7,2,6,1)); //output : 8 //maximum value

console.log(Math.random());//random value always between 0 to 1 with lots of decimals.

console.log(Math.random()*10);//random value always between 0 to 9 with lots of decimals.

console.log(Math.trunc(((Math.random() * 10) + 1)));// output : always betweem 1 to 10; 


//lets a range is 30 to 50 //Get random number 
const min = 30;
const max = 50
console.log(Math.random()*(max - min + 1) + min);//return random number between 30 to 50






