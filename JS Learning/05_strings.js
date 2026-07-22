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
