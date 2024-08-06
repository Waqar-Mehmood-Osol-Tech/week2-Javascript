// // Lexical scoping 
// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }

// init();


// function outer() {
//     let name = "Waqar"
//     // console.log(secret); // gives error
//     function inner() {
//         let secret = "my123"
//         console.log("inner: ", name);
//     }
//     function innerTwo() {
//         console.log("innerTwo: ", name);
//         // console.log(secret); // gives error

//     }
//     inner();
//     innerTwo();
// }

// outer();
// console.log("too outer: ", name);


// Closure
// Function scope remains until it is executed.
// but when function is exceited there will be no scope remaining
// 

// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     // so here it not only returning the 
//     // inner function but also the lexical scope of outer function because of 
//     // lexical scoping
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();




