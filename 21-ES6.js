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




