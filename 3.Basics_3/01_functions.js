//***** sum of 2 numbers
function sum(a, b) {
    return a + b;
}

//Default parameter
function sum2(a, b = 5) {
    return a + b;
}

let answer = sum(2, 5);
console.log(answer);



// If the parameter is empty while calling the function js treat it as undefined that's why default parametrs are used
function loginUserMessage(username){
    // if username is undefined or empty
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()) // please enter a username - undefined 
console.log(loginUserMessage("samrat")) // samrat just logged in



//******** Rest operator 
// Here all the values passed as a parameter will be stored inside a array
function calculateCartPrice(...num1){
    return num1
}

// Here the first two parameters will be stored inside the val variables and others will be stored in the array
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [ 200, 400, 500, 2000 ]
console.log(calculateCartPrice2(200, 400, 500, 2000)) // [ 500, 2000 ]


// Objects can be passed as an argument in the function
const user = {
    username: "Samrat",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Two ways to pass object as an argument
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})



// Arrays can be passed as an argument inside the function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// Two ways to pass arrays as an argument
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));