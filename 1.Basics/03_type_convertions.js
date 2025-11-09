/**** Conversion to number ****/
let score = "abcd";
let score2 = null;
let score3 = undefined;
let score4 = true;

console.log(typeof score); // String 
console.log(typeof(score)); // String

let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);

console.log(typeof valueInNumber); // number

console.log(valueInNumber); // NaN (string)
console.log(valueInNumber2); // 0 (null)
console.log(valueInNumber3); // NaN( undefined)
console.log(valueInNumber4); // 1 (boolean)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null => 0; undefined => NaN

/**** string & number to boolean ****/
let isLoggedIn = "abcd"
let isLoggedIn2 = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn); // true
console.log(booleanIsLoggedIn2); // false

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


/**** number to string ****/
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // "33"
console.log(typeof stringNumber); // string