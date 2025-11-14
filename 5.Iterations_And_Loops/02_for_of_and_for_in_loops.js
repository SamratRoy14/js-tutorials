// for-of loop (used for array and strings) :- 

let myName = "Samrat"
length = 0;
for(let i of myName) //iterator
{
    console.log(i);
    length++;
}
console.log("Length :",length);


// Maps - These are iteratable using for-of loops

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


/*
// Objects are not iterateble using for-of loops
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
*/


// for-in loop(used for finding key and values) :- 

// for-in loop in objects
let student = {
    myName : "sam",
    age : 20,
    cgpa : 8.85,
    isPassed : true,
};

for(let key in student)
{
    console.log("Key : ", key ,", Value : ", student[key]);
}

// for-in loop in arrays(keys : 0, 1, 2 ...)
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`${key} : ${programming[key]}`);
}


/*
// Maps are not iterateble using for-in loop 
const map2 = new Map()
map2.set('IN', "India")
map2.set('USA', "United States of America")
map2.set('Fr', "France")
map2.set('IN', "India")

for (const key in map2) {
    console.log(key);
}
*/
