const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
/* The toFixed() method is used to format a number with a 
specified number of decimal places.*/

const otherNumber = 1234.556789;
console.log(otherNumber.toPrecision(4));
/* The toPrecision() method is used to format a number with a 
specified number of significant digits.*/

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
/* The toLocaleString() method is used to format a number */


//-------------------------- Maths -----------------------------------
console.log (Math) ;
console.log (Math. abs(-4)); ;
console.log (Math. round (4.7));
console.log (Math. ceil (4.2) ) ; /* The ceil() method is used to round a number up to the nearest integer. */
console.log (Math. floor(4.9) ) ; /* The floor() method is used to round a number down to the nearest integer. */
console.log (Math.min (4, 3, 6, 8))
console.log (Math.max (4, 3, 6, 8))

console.log (Math. random());
console.log(Math.floor((Math.random()*10) + 1)); /* The Math.random() method is used to generate a random number 
between 0 (inclusive) and 1 (exclusive). The Math.floor() method is used to round a number down to the nearest integer. */


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) /* The above code generates a random number between the 
specified minimum and maximum values (inclusive). The formula used is: Math.floor(Math.random() * (max - min + 1)) + min. */




