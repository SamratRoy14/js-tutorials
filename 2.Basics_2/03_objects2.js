
// const tinderUser = new Object() -> singleton 
const tinderUser = {} // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // to access all the keys in the object in array format
console.log(Object.values(tinderUser)); // to access all the values in the object in array format
console.log(Object.entries(tinderUser)); // to access all the keys & values in the object in array format

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check if a property exists or not



// Nested object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "samrat",
            lastname: "roy"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);



//***** Merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//1. const obj4 = { obj1, obj2, obj3 } // This will merge the objects in nested manner{{obj1},{obj2},{obj3}}

//2. assign(target,source) -> target : where to merge, source : the objects needs to be mergerd
// const obj4 = Object.assign({}, obj1, obj2, obj3)

//3. object spread
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);



// When will retreive data from database it will be presented in a array of object format
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email -> to access data in array of objects


//******** Object destruction
const course = {
    coursename: "web developement",
    price: "999",
    courseInstructor: "sam"
}

// Normal access
// course.courseInstructor

//Destructing the object course and we can use courseInstructor now as a normal variable
// const {courseInstructor} = course
const {courseInstructor: instructor} = course // we can also use a different name

// console.log(courseInstructor);
console.log(instructor); // sam


//******* JSON format
// {
//     "name": "sam",
//     "coursename": "Javascript tutorials",
//     "price": "free"
// }

// Another type of json format
[
    {},
    {},
    {}
]
