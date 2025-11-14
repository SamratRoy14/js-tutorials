//********** forEach(callbackFunc) loop
// callbackFunc - could be a function definition or a variable(which stores a function definition)
// callback functions can have 3 parameters (value, index, array)
// forEach is a "HIGHER ORDER METHOD" as it take function definitions as argument and also returns function definitions

// Q> For a given array of numbers, print the square of each value using the forEach loop.

let arr = [2, 3, 4, 5, 6, 7];

//type1
arr.forEach((val) => {
    console.log(val ** 2);
});

/*
//type2
arr.forEach(function square(val) {
    console.log(val ** 2);
});
*/

/*
// type3
function square(val) {
    console.log(val ** 2);
}
arr.forEach(square);
*/


// all the parameters of forEach loop
arr.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )



//Iterating on array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item); // object itself
    console.log(item.languageName);
    console.log(item.languageFileName);
} )
