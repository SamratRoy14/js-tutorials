// singleton object : const newObj = new Object();
// non-singleton object : const newObj2 = {};
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Samrat",
    "full name": "Samrat Roy",
    [mySym]: "mykey1", // symbols can be used as a key only with []
    age: 18,
    location: "Kolkata",
    email: "Samrat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Access object values
console.log(JsUser.email)
console.log(JsUser["email"])

// Strings and symbols can be accessed only with square brackets
console.log(JsUser["full name"]) 
console.log(JsUser[mySym])



// We can freeze an object that can't be updated further
// JsUser.email = "Samrat@chatgpt.com"
// Object.freeze(JsUser) // "Samrat@chatgpt.com"
// JsUser.email = "Samrat@microsoft.com" 
// console.log(JsUser); // "Samrat@chatgpt.com"



JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // this is a reference to JsUser
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Samrat