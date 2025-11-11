//Arrays - mutable

let heroes = ["ironman","hulk","thor","batman"];

let marks = [ 96, 75, 48, 83, 66 ];

let mark = new Array(76, 89, 98);

let info = [ "rahul", 86, "Delhi"];

console.log(heroes);
console.log(marks);
console.log(info);

// Q> For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
//    Find the average marks of the entire class.

let marks2 = [85, 97, 44, 37, 76, 60];

let sum = 0;
for(let i of marks2)
{
    sum += i;
}

let average = sum / marks2.length;
console.log("Average marks is ",average);

// Q> For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//   All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

prices = [250, 645, 300, 900, 50];
for(let i = 0; i < prices.length; i++)
{
    prices[i] -= prices[i] * 0.1;
}

console.log(prices);

/***********************************************************************************************************/


// Array Methods

// push(elem1, elem2, ...) - add element in end and returns new size
// pop() - delete from end and return the element
// toString() - coverts the array into a string

// concat() - joins multiple arrays & returns result

let marvel = ["ironman", "thor", "hulk"];
let dc = ["batman", "superman", "flash"];
let indianHeroes = ["shaktiman", "krish"];
let allHeroes = marvel.concat(dc, indianHeroes);
// Another ways => 
// let newhero = marvel + dc + indianHeroes;
// let all_new_heros = [...marvel, ...dc, ...indianHeroes] -> spread
console.log(allHeroes);



// Unshift(elem1, elem2, ...) : add to start
// shift() : delete from start & return the element


// join() - Adds all the elements of an array into a string, separated by the specified separator string.
const myArr = [0, 1, 2, 3, 4, 5]
const newArr = myArr.join() 
console.log(myArr); // [0, 1, 2, 3, 4, 5]
console.log(newArr); // 0, 1, 2, 3, 4, 5 -> string


// slice(start, end?) - end is not required and its not inclusive and doesn't change the original array
let marvelHeroes = ["ironman", "thor", "hulk", "antman"];
console.log(marvelHeroes.slice(1, 3));// elements at 1 & 2 index - thor, hulk



// splice() - changes the original array (add, remove, replace) and returns the deleted elements
// splice( startIdx, delCount, newElem1... )
// startIdx - from which index we want to delete
// delCount - how many elements we want to delete
// newElem1.. - all the new elements will be added from startIdx(optional)

let superHeroes = ["ironman", "thor", "hulk", "antman", "batman", "superman"];
superHeroes.splice(1, 2, "Odin", "redHulk");
console.log(superHeroes); // 'ironman', 'Odin', 'redHulk', 'antman', 'batman', 'superman'







// Q> Qs. Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2, 1, "Ola");
companies.push('Amazon');
console.log(companies);



// flat(depth) - Returns a new array with all sub-array elements concatenated into a single array up to the specified depth.
const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = array.flat(Infinity)
console.log(real_array);


//******Array object

console.log(Array.isArray("Sam")) // checks if its an array or not

// from() - Creates an array from an iterable object.
console.log(Array.from("Sam")) // converts string into an array -> ['S','a', 'm']
console.log(Array.from({name: "sam"})) // returns an empty array cause the iterable factor is not specified

// of() - Returns a new array from a set of elements.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]