const name = "Waqar"
const repoCount = 50

// Not good Approach syntax for concatination adn also very old
// console.log(name + repoCount + "Value");

// We also use back ticks to perfrom the concatination
// String Interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// String Function / String constructor 
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
a instanceof String; // is true
b instanceof String; // is false
typeof a; // "object"
typeof b; // "string"

// String Constructor  and type is object and gameName is the istance of String
const gameName = new String('CallofDuty')

console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(8));

console.log(gameName.indexOf('C'));

// Slicing in Strings 

// Substring
const newString = gameName.substring(0, 4);
console.log(newString);

// Slice accept the startindex as negative value but substring not accept it...
const anotherString = gameName.slice(-9, 6);
console.log(anotherString);


// trim 
const newStringOne = "     Waqar     "
console.log(newStringOne);
console.log(newStringOne.trim());

// Replace method
const url = "https://waqar.com/waqar%20resume"
console.log(url.replace('%20', '-'));

console.log(url.includes('waqar'));
console.log(url.includes('zain'));

// Convert a String to Array (Split Method)
const newString1 = new String('w-a-q-a-a-r');
console.log(newString1.split('-'));












