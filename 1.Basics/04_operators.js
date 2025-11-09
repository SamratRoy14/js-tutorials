// 1. Arithmatic Operator

a = 5;
b = 2;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b); // a to the power b => a ^ b

/*
    2. Unary Operator
    a++ or ++a
    b-- or --b
*/

/* 
    3.Assignment Operator
    =, +=, -=, *=, /=, %=, **= 

    a += 2; // a = a + 2
    a **= 3; // a = a ** 3

*/

/* 
    4.Comparison Operator
    ==, !=, ===, !==, >, <, <=, >=

    == -> check the value only
    === -> check the value and data type
*/

c = 5;
d = "5";
console.log(c == d); // true
console.log(c === d); // false

/*
    5.Logical Operator
    && , || , !
*/
console.log(c == d && c === d); // false
console.log(c == d || c === d); // true
console.log(!(c == d)); // false
/*
let e = c == d;
let f = c === d;
console.log(e && f); // false
*/


// Conditional Statements - same as c++ & java
// Ternary operator -> condition ? true output : false output

let age = 25;

let result = age > 18 ? "adult" : "not-adult";
console.log(result);

/* Question 1 */
// Get user to input a number and check if it's multiple of 5 or not

/*
let num = prompt("Enter a number");

if(num % 5 == 0) 
{
    console.log("True");
}
else
{
    console.log("False");
}
*/

/****************************/

// If the first operand is string it will concatenate all the operands
// And if the first operand is number it will do the operations and
// when a string comes up it will concatenate that with the result

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

// Another way for type conversion
console.log(+true); // 1
console.log(+""); // 0

// Assign same value to multiple variables
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

