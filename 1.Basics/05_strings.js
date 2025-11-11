
// Strings (Immutable in JS -> can't change the original string(stored in heap))

let Name = "sam"; // double quote
let Name2 = 'sam'; // single quote
let Name3 = new String('sam'); 


// console.log(gameName.__proto__); // gives us the prototype object which includes all the string methods but we can use those methods directly

// length 
size = Name.length; //3
let str = "sam\trat"; // tab space
let str2 = "sam\nrat"; // new line
size2 = str.length; //7

console.log(size2);
console.log(str);
console.log(str2);

// String Template Literals - A way to have embedded expression in strings
// `string text ${expression} string text`

let fruits = {
    name : "mango",
    price : 20,
};

let output = `The name of the fruit is ${fruits["name"]} and it's price is ${fruits["price"]} rupees `
console.log(output); // The name of the fruit is mango and it's price is 20 rupees

// string methods // 

// toUpperCase() && toLowerCase()

let temp = "sam";
let temp2 = temp.toUpperCase();
console.log(temp2); // SAM

// trim() - removes all the spaces from both sides of the text

let temp3 = "     This is a String    "
console.log(temp3.trim()); // This is a String

// slice(start, end?) - end is not required and its not inclusive

let temp4 = "ItsAString";
console.log(temp4.slice(1, 4)); // tsA - as index 4 is not included


// concat() 
let temp5 = "sam";
let temp6 = "rat";
temp5 = temp5.concat(temp6); // also (temp5 + temp6) can be used 
console.log(temp5); // samrat

// replace(searchVal, newVal) - only change the first matching occurance(use replaceAll for changing all occurences)
let temp7 = "hello";
temp7 = temp7.replace("h","y");
console.log(temp7); // yello
console.log(temp7.replace("lo", "p")); // yelp

// charAt(index)
let temp8 = "Javascript";
console.log(temp8.charAt(2)); //v
console.log(temp8.charAt(5)); //c

// indexOf(index)
let temp9 = "Javascript";
console.log(temp9.indexOf('p')); //8
console.log(temp9.indexOf('v')); //2

// split('separator', limit) - converts the string into an array based on the separtor 
let temp10 = "samrat-roy-male-22";
console.log(temp10.split('-')); // ['samrat', 'roy, 'male','22'];
let temp11 = "samrat roy male 22";
console.log(temp11.split(' ')); // ['samrat', 'roy, 'male','22'];

/*
// Q> Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = smaratroy, username should be “@samratroy14”

// Solution :-

let input = prompt("Enter the full name");
let size3 = input.length;
let userName = "@" + input + size3;
console.log("Username saved", userName);

*/

