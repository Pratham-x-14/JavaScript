let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); /* The Date.now() method is used to get the current timestamp in milliseconds 
since January 1, 1970 (the Unix epoch).*/

console.log(myCreatedDate.getTime()); /* The getTime() method is used to get the timestamp of a 
specific date in milliseconds since January 1, 1970 (the Unix epoch).*/

console.log(Math.floor(Date.now()/1000)); /* The Math.floor(Date.now()/1000) expression is used to get 
the current timestamp in seconds */

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday : "long"
    
}) /* The toLocaleString() method is used to convert a Date object into a string representation based 
on the specified locale and options. In this case, it is used to get the full name of the day of the 
week (e.g., "Monday", "Tuesday") for the current date. The 'default' locale is used, which means it will 
use the default locale of the environment where the code is running. */

