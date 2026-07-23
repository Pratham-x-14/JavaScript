const name = "Pratham";
const repoCount = 25;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is 
    ${repoCount} `);

let oldGameName1 = new String("gta");
oldGameName = oldGameName1;
newGameName = "GTA5";
console.log(newGameName[2]);
console.log(newGameName.__proto__); /*__proto__ is used to 
    access the prototype of an object in JavaScript. 
    In this case, it will show the prototype of the String 
    object, which includes various methods and properties 
    that can be used with string instances.*/

console.log(newGameName.length);
console.log(oldGameName);
console.log(oldGameName.toString());
console.log(newGameName);
console.log(newGameName.charAt(2));
console.log(oldGameName.charAt(2));
console.log(newGameName.indexOf('T'));

const newString =  newGameName.slice(0, 3);
console.log(newString);

const anotherString = newGameName.substring(-3, 2)
console.log(anotherString);

const newString2 = "   Pratham    "
console.log(newString2.trim());

const url = "https://www.you&20tube.com"
console.log(url.replace("&20", "-"));

console.log(url.includes("youtube"));

const newString3 = new String("Pratham-pr-at-ha-m");
console.log(newString3.split('-'));
// if we want to split the string into an array of substrings 
// based on a specific delimiter, we can use the split() method.
// In this case, we are splitting the string "Pratham-pr-at-ha-m"
// using the hyphen '-' as the delimiter. 
// The result will be an array containing the individual substrings:
//  ["Pratham", "pr", "at", "ha", "m"].
