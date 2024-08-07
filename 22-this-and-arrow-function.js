// This Keyword in JavaScript
// The `this` keyword in JavaScript refers to the current execution context of a function. It can
// be used to access the current object, the current function, or the global object.

// Arrow Function in JS
// An arrow function in JavaScript is a concise way to express a function. It is defined using the
// `=>` operator.

const user = {
    username: 'Waqar',
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website.`);
        // console.log(this);

    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// const newfunc = () => {
//     let username = 'Waqar'
//     console.log(this.username);
// }


// newfunc();

// Arrow Function
// implicit return
const addTwoImplicit = (num1, num2) => (num1 + num2);
console.log(addTwoImplicit(1, 34));

// Explicit return 

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(1, 34));


const myArray = [2, 45, 5, 6, 6]

myArray.forEach((element, index) => {
  console.log(`${element} and ${index}`)     
})



