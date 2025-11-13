// Conditional Statements 
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly" // local var inside if
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // unaccessible



// Nested if-else
    const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // one way to write if-else

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");
}


// If -else with Logical operators

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// Ternary operator -> condition ? true output : false output

let age = 25;

let result = age > 18 ? "adult" : "not-adult";
console.log(result);


/*
// Question 1 
// Get user to input a number and check if it's multiple of 5 or not

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