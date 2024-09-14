const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros= ["superman","flash","batman"]

marvel_heros.push(dc_heros)  //push
console.log(marvel_heros);

// const newHeros = marvel_heros.concat(dc_heros); //concat method
// console.log(newHeros);

const allHeros = [...marvel_heros,...dc_heros]//spread method : used to spread the all arrays element into individual element then it return the array of all that spreaded element
// console.log(allHeros);


const another_array = [1,2,3,[4,5,6,[7,8,[9]]]]; //here is array in array 
const real_another_array = another_array.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log(real_another_array);


// change into any state/format into Array

// console.log(Array.isArray("atulyadav"));
// console.log(Array.from("atulyadav"));//Creates an array from an iterable object. using "from"
// console.log(Array.from({name : "atulyadav"}));//intersting for interview


let score1=100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.



