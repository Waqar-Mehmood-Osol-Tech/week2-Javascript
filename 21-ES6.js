// Introductin to ES6
// 1. let and const
// 2. Arrow functions
// 3. Template literals
// 4. Destructuring
// 5. Spread operator
// 6. Classes
// 7. Promises
// 8. Async/Await
// 9. Modules
// 10. Generators
// 11. Iterators

// 1. Let, const and Var
// Var
function exampleVar() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10
    if (true) {
        var a = 20;
        console.log(a); // 20 (same variable as above)
    }
    console.log(a); // 20 (same variable as above)
}
exampleVar();

// Let
function exampleLet() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 10;
    console.log(b); // 10
    if (true) {
        let b = 20;
        console.log(b); // 20 (different variable from the outer one)
    }
    console.log(b); // 10 (outer variable remains unchanged)
}
exampleLet();

// Const
function exampleConst() {
    // console.log(c); // ReferenceError: Cannot access 'c' before initialization
    const c = 10;
    console.log(c); // 10
    if (true) {
        const c = 20;
        console.log(c); // 20 (different variable from the outer one)
    }
    console.log(c); // 10 (outer variable remains unchanged)

    // c = 30; // TypeError: Assignment to constant variable.
}
exampleConst();


// IIFE (Immediately Invoked Function Expression)
// IIFE is a function that is invoked immediately after it is defined.
// It is used to create a new scope and to prevent variables from being accessed globally.
// IIFE is useful for creating private variables and functions that are not accessible from outside the function.


// 1.Using IIFE to Avoid Global Variables

var globalVar = "Global Variable";

(function () {
    var localVar = "Local variable";
    console.log(localVar);
})();

console.log(globalVar);
// console.log(localVar);  // Uncaught reference Error: localVar is not definde so
// in this way IIFE prevents from polluting the global variables

// 2.  Creating Private Variables
var counter = (function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        // by the way this is the 
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // Output: 0
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value()); // Output: 3
counter.decrement();
console.log(counter.value()); // Output: 2
// In this way we can create private variables and functions that are not accessible from outside the function.



// Template Literals
// Template literals are a new way to create strings in JavaScript. They are similar to string interpolation in
// other languages. They are created using the backtick character (`) instead of quotes.
// multipline strings is possible in letarals
let str = `How are you?
what are you doing?
tell me about yourself.
`
// console.log(str);


let a = 4
let b = 3

let str1 = `The Sum of a: ${a} and b: ${b} is qual to ${a + b}`;

// console.log(str1);

// Destructuring

// Object Destructuring
const person = {
    firstName: "Waqar",
    lastName: "Mehmood",
    age: 25,
    occupation: "Software Engineer",
}

// let { firstName, lastName } = person;

// console.log(firstName, " " , lastName);


// The Order of Properties doesn't matter
// let { lastName, firstName } = person;


// For potentially missing object values we can set the default
// Destructuring
let { firstName, lastName, country = "PK" } = person;
console.log(firstName, " ", lastName, " ", country);

// Object Property alias
let { lastName: name } = person;
console.log(name);


//  Destructuring in the Strings
// Destructuring after converting strings to an array
let str3 = "Waqar";

let [s1, s2, s3, s4, s5] = [...str3]

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);

//  Destructuring using Array.from
const str4 = "world";
const [w, o, r, l, d] = Array.from(str4);

console.log(w); // "w"
console.log(o); // "o"
console.log(r); // "r"
console.log(l); // "l"
console.log(d); // "d"

// using Rest operator
const [s11, s12, ...rest] = "Waqar";
console.log(s11); // "W"
console.log(s12); // "a"
console.log(rest); // "qar"

// Array Destructuring
// Create-an-Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits; 

console.log(fruit1, fruit2);
















