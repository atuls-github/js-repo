// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();

//arrow function iife
((name)=> {console.log(`DB CONNECTED TWO ${name}`);
})('anuj');
