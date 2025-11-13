
//*********** for-loops
/*
//Syntax
for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}
*/

//Example
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}

// console.log(element); // not accessible

/*
// Nested Loop
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
*/

//Looping through array
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// break and continue with loops

//Dont print anything from 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

// Dont print 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}



//*********** while-loops

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

//while loops in array
let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


//*********** do-while-loops

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
// Output : Score is 11