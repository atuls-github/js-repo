const Name = "Aman Yadav"; //declare string 
const repoCount = 5;

console.log("hello my name is " + Name + " and repoCount is " + repoCount); //bad practice 

console.log(`hello my name is ${Name} and repoCount is ${repoCount}`);//here we use String interpolation by the backticks


const gameName = new String("neonblue");
console.log(gameName);

console.log(gameName.__proto__)// we can use prototypes instead of __proto__
console.log(gameName.length);


console.log(gameName.toUpperCase());//output : NEONBLUE //but not affect the original variable 


console.log(gameName.charAt(7));//output : e //it give the character when input index number


console.log(gameName.indexOf('e'));//output : 1 //it give the index number of the first occurance of input character

console.log(gameName.charCodeAt('u')); //we can use it to check the charater code 


const stringOne = gameName.substring(0,5);//output : neonb //donot take negative value 
console.log(stringOne);

const stringTwo = gameName.slice(-8,3);//output : neo //it can take negative value
console.log(stringTwo);

const stringThree = "     ankit yadav    ";
console.log(stringThree);//default

console.log(stringThree.trim());//using trim function //removes white space from sides of the value


const url = "https://hitesh.com/atul%20yadav"
console.log(url.replace('%20','_'));//replace function

console.log(url.includes('a'));//output : True //check the value is in string or not


const newString = "The quick brown fox jumps over the lazy dog.";
const word = newString.split(' ');
console.log(word[4]);//"jump"

const chars = newString.split('');
console.log(chars[12]);//"o"

const fullString = newString.split();
console.log(fullString);










