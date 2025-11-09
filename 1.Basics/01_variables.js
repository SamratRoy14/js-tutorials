// JavaScript is a dynamically typed language, which means that data types of variables are
// determined by the value they hold at runtime and can change throughout the program as we
// assign different values to them.


const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState; // undefined

// accountId = 2 // can't change the constant


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
=> If there are two var with same name, if we change one it will reflect on other one
*/


console.table([accountId, accountEmail, accountPassword,accountCity, accountState])