
//********** filter(callbackFunc) - Creates a new array of elements that give true for a condition/filter.

let elements = [1, 2, 3, 4, 5, 6, 7, 8];

// filter out all the even number in a new array

let evenNums = elements.filter((val) => {
    return val % 2 === 0;
});

console.log("Even array",evenNums);

// let evenNums = elements.filter((val) => val % 2 === 0); // another way to write, no curly braces -> son no return statement

/*
//If we don't wanna use filter 
const evenNums = []

evenNums.forEach( (val) => {
    if (val % 2 === 0) {
        evenNums.push(val)
    }
} )

console.log(evenNums);
*/

//Q> 1. Print all the objects with genre history
//   2. Print all the objects with genre history and publish year after 1995
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History') // no curly braces used here, so no need to write return

let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);
console.log(userBooks2);





//********** map(callbackFunction) - it returns a new array and performs operations on elements
let numbers = [10, 20, 30];

let newNUmbers = numbers.map((val) => {
    return val * 2;
});

console.log("Old array", numbers);
console.log("New array",newNUmbers);


//Chaining of functions
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);





//************* reduce(callbackFunc) - Performs some operations & reduces the array to a single value. It returns that single value.

// callbackFunc has 2 parameters prev/result and current.prev refers to first element and stores the result. current refers to second element in the array and 
// traverse the array and compare with prev
// It also has initialValue which denotes the value of prev in the start 

// Find the sum in the array

let items = [2, 4, 8, 5, 1, 4];

let addition = items.reduce((prev, curr) => {
    return prev + curr;
});

console.log("Sum = ", addition);

// const myTotal = items.reduce( (prev, curr) => prev+curr, 0) // another way to write it here 0 denotes initial value



// Find maximum in an array

let ar = [2, 4, 8, 5, 1, 4];

let max = ar.reduce((prev, curr) => {
    return prev < curr ? curr : prev;
}, 0);

console.log("Maximum = ", max);

// reduce() on array of objects
//Q> Find the total cart price 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`Total price to pay ${priceToPay}`);



// Q>  We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [96, 86, 75, 90, 98, 91, 87];

let marksAbove90 = marks.filter((val) => {
    return val >= 90;
});

console.log("Marks above 90 = ", marksAbove90);



/*
Q>  Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate product of all numbers in the array.
    Use the reduce method to calculate sum of all numbers in the array.
*/

/*
//Solution :
let input = prompt("Enter a number");
let arr2 = [];
for(let i = 0; i < input; i++)
{
    arr2[i] = i + 1;
    //arr2.push(i + 1);
}

let product = arr2.reduce((prev, curr) => {
    return prev * curr;
});
let sum2 = arr2.reduce((prev, curr) => {
    return prev + curr;
});

console.log(arr2);
console.log(`Product = ${product} and Sum = ${sum2} `);
*/
