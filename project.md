# project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html,1-colorChanger%2Findex.html)

# Solution code

## project 1
``` javascript
//code
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e.target.id);

//with if statement
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'white'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'blue'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'yellow'){
    //   body.style.backgroundColor = e.target.id;
    // }

//when we donot know the color of buttons
  const color = window.getComputedStyle(button).backgroundColor;
  body.style.backgroundColor = color;


//using switch statement

  // switch (e.target.id)
  // {

  //   case 'grey' :
  //   body.style.backgroundColor = e.target.id;
  //   break;
  //   case 'white' :
  //   body.style.backgroundColor = e.target.id;
  //   break;
  //   case 'blue' :
  //   body.style.backgroundColor = e.target.id;
  //   break;
  //   case 'yellow' :
  //   body.style.backgroundColor = e.target.id;
  //   break;
  //   default :
  //   break;
  // }
  })
})
```

## project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results =document.querySelector('#results');


if(height === '' || height < 0 || isNaN(height) ){
  results.innerHTML= `enter valid height ${height}` ;
}else if (weight === '' || weight < 0 || isNaN(weight) ){
  results.innerHTML= `enter valid weight ${weight}`;
}else{
  const bmi = (weight/(height*height /10000)).toFixed(2)
  results.innerHTML= `<span>${bmi}</span>`
}})
```

## project 3 solution
```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date;
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```