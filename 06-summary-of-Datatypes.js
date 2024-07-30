// Primitive Datatypes
// ======================
// Boolean
// Number
// String
// Null
// Undefined
// Symbol (new in ECMAScript 6)
// BigInt (new in ECMAScript 2020) //scientific and really big values


let score = 100
let scoreVAlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// how to define symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 122222222220928131212n
console.log(bigNumber);



// Dynamically typed language which offers great amount of flexibilty in handling the data.

// Reference (Non primitive data types)
// Object
// Array
// Functions


const heroes = ['superman', 'batman', 'spiderman']

let myObj = {
    name: 'Waqar',
    age : 22,
    occupation: 'Software Engineer',
}


const myFunc = function(){
    console.log('Hello World');
}


console.log(typeof bigNumber);

console.log(typeof myFunc)




