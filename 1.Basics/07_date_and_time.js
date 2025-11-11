let mydate = new Date();

// Formats to present dates to users
console.log(mydate.toDateString()); // Tue Nov 11 2025
console.log(mydate.toISOString()); // 2025-11-11T07:41:03.159Z
console.log(mydate.toJSON()); // 2025-11-11T07:41:03.159Z
console.log(mydate.toUTCString()); // Tue, 11 Nov 2025 07:41:03 GMT
console.log(mydate.toTimeString()); // 13:11:03 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleDateString()); // 11/11/2025
console.log(mydate.toLocaleTimeString()); // 1:11:03 pm
console.log(mydate.toLocaleString()); // 11/11/2025, 1:11:03 pm


console.log(typeof mydate); // object


// Get details about the date
console.log(mydate.getDate());
console.log(mydate.getFullYear());
console.log(mydate.getMonth()); // 0-11, where 0 is Jan
console.log(mydate.getDay()); // 0-6, where 0 is Sun
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getSeconds());



// Date from a Date String
const specificDate = new Date('October 26, 2024 14:30:00');
console.log(specificDate);


// Create an object with the date February 10, 2025, 10:30 AM
const ymdhms = new Date(2025, 1, 10, 10, 30, 0);
console.log(ymdhms);



// You can specify options for more control:
console.log(mydate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));
// Output: Tuesday, November 11, 2025
