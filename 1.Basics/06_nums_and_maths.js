// +++++++++++++ Numbers +++++++++++++++++++++++++++++

const score = 400 // score is a number variable 
const balance = new Number(100) // score is a number object 
console.log(balance); // [Number :100]

console.log(balance.toString()); // converts to string
console.log(balance.toString().length); // 3

console.log(balance.toFixed(1)); // 100.0
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); //gives pricise ans till 3 digit - 124
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // converts to locale system(US) - 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // converts to indian system - 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // maths object
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // generates a random no. b/w 0 and 1
console.log((Math.random()*10)); // generates a random no. b/w 0 and 10
console.log((Math.random()*10) + 1); // generates a random no. b/w 1 and 11
console.log(Math.floor(Math.random()*10) + 1); // generates a random no. b/w 1 and 10 (no decimal value)

// If we want a random number b/w to numbers
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // random no. b/w 10 and 20

let a = 51;
let b = 70;

console.log(Math.floor(Math.random() * (b - a + 1) + a));// random no. b/w 51 and 70
