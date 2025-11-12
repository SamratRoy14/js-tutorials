
var c = 300 // global scope
let a = 300 // global scope
if (true) {
    let a = 10 // scope inside the if statement
    const b = 20 // scope inside the if statement
    console.log("INNER: ", a); // 10
    
}

// console.log(a); // 300
// console.log(b); // error
// console.log(c); // 300


//********** Scenario 1
function one(){
    const username = "samrat" // local scope inside one() & two()

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // local scope inside two()

    two()
}

one()


//********** Scenario 2
if (true) {
    const username = "samrat"
    if (username === "samrat") {
        const website = " youtube"
        console.log(username + website); // allowed
    }
    // console.log(website); // not accessible here
}

// console.log(username); // not accessible here



// ++++++++++++++++++ Special Case ++++++++++++++++++

// This is allowed
console.log(addone(5))
function addone(num){
    return num + 1
}

// This is not allowed function calling before initialization
console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
