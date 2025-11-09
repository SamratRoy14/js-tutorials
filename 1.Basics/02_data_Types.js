"use strict"; // treat all JS code as newer version


/* Data Types :
 1.Primitive : number, boolean, string, null, undefined, bigint, symbol
 2.Non-Primitive : objects
*/

let a = 10;
b = 40;
myName = "Samrat";
salary = 50000.40;
// 12varname = 20; variable name starting with number is not allowed 
const details = {
    myName : "Samrat",
    age : 23,
    marks : 95,
    isPassed : true,
}
/*
    Access data in object 
    details["myName"] or details.myName
    details["age"] or details.age
*/

console.log(a);
console.log(b);
console.log(myName);
console.log(salary);
console.log(details);
console.log(typeof salary); // number
console.log(typeof details);// object
console.log(typeof details.myName); // string 


details.age += 1;

console.log(details.age);
console.log(details);


//**** Type of null is object but type of undefined is undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object


// alert("Hello"); // Not gonna work here cause we're working on node js
