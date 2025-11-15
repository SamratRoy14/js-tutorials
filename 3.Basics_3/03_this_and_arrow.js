const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this will work on current context
        console.log(this);
    }

}

user.welcomeMessage() // hitesh -> current context
user.username = "sam" // context changed
user.welcomeMessage() // sam -> current context

// console.log(this); // {} in "Node" environment global context is empty object but in browser env global context is window object

/*
// "this" doesn't work in functions 

function chai(){
    let username = "hitesh"
    console.log(this.username); // undefined
}
chai()

// Storing in a variable and calling it

const chai = function () {
    let username = "hitesh"
    console.log(this.username); // undefined
}
chai()
*/


// Arrow functions
const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
    console.log(this.username); // undefined
}
chai()


// Arrow function to add two numbers

const addTwo = (num1, num2) => {
    return num1 + num2
}

// In this type of func definitions there's no need add return keyword

// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


//Exercise

// ****Q> Create a function using the “function” keyword that takes a String as an argument &
//    returns the number of vowels in the string.
let count = 0;
function vowelCount(word) {
    for(let i of word) {
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
            count++;
        }
    }
    return count;
}

let answer2 = vowelCount("Hospital");
console.log("Number of vowel is", answer2); //3

/*
// using arrow function
let count2 = 0;
let vowelCount2 = (word) => {
    for(let i of word) {
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
            count2++;
        }
    }
    return count2;
}
let answer3 = vowelCount2("Hospital")
console.log("Number of vowel is(using arrow function)", answer3); 
*/
