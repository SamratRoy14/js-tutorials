//Check empty string
const userEmail = ""
if (userEmail) { //false
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*
//Check empty array
const userEmail = []
if (userEmail) { //true
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
*/


// falsy values(considered as false) : false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values(considered as truth) : "0", 'false', " ", [], {}, function(){}


//Check empty array
const userEmail2 = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}


//Check empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??): null and undefined
// This operator is a logical operator that returns its right-hand operand only when its left-hand operand is either null or undefined.
// In every other case, it returns the left-hand operand.

let val1;
// val1 = 5 ?? 10 // val1 -> 5
// val1 = null ?? 10 // val1 -> 10
// val1 = undefined ?? 15 // val1 -> 15
val1 = null ?? 10 ?? 20 // val1 -> 10

console.log(val1);



// Terniary Operator => condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")