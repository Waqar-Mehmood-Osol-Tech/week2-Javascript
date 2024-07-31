// const score = 400
// console.log(score);

// // explicitly setting to Number
// const balance = new Number(100)
// console.log(balance);


// // to String
// console.log(balance.toString().length);

// // to Fixed
// console.log(balance.toFixed(2));

// // to Precision
// const otherNumber = 29.8966
// const otherNumber1 = 129.8966
// const otherNumber2 = 1129.8966

// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber1.toPrecision(3));
// console.log(otherNumber2.toPrecision(3));


// const hundreds = 1000000
// // By default they give in US standard
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++ Math Library ++++++++++++++++++++++++

console.log(Math);

// Negative change into the positive 
console.log(Math.abs(-4))

// Round off the number
console.log(Math.round(4.7))

// Floor and Ceil
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

// Max and Min 
console.log(Math.min(4, 3, 7 , 6));
console.log(Math.max(4, 3, 7 , 6));


// Math Random 
console.log(Math.random());
console.log((Math.random() * 10 ) + 1);
console.log(Math.floor(Math.random() * 10 ) + 1);

// trick of defining the max and min when you are genratin teh random value
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)











