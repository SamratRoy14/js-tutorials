// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that is defined and executed immediately after it is created.
// It prevents Global Scope Pollution (Data Privacy)

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); // The final parentheses immediately execute the function

(() => {
    console.log(`DB CONNECTED THREE`);
})();

// Simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Samrat')