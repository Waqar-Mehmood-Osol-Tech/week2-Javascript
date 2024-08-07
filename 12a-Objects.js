// Singleton
// if made from constructor then its singleton
// if made from static literals then its not singleton

// Object Literals

const mySym = Symbol('Key1');

const jsUser = {
    name: 'Waqar',
    "full name": "Waqar Mehmood", // there is no way to access this using . operator
    [mySym]: "myKey1", // the right way to use th symbol in the object
    age: 30,
    gender: 'male',
    email: 'waqar@gmail.com',
}

console.log(jsUser.email); // correct but not good
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym])

// to over write a value
jsUser.email = 'mehmood @gmail.com'

// Object.freeze(jsUser); // no change will be propogated after this

// Object.seal(jsUser); // no new property can be added but existing can be changed

// jsUser.email = 'zain@gmail.com'
console.log(jsUser.email); // give the value before freeze


// New concept of adding function 
jsUser.greeting = function () {
   console.log(`Hellow JS User ${this.name}`); // String interpulation
}


console.log(jsUser.greeting); // only get the function reference
console.log(jsUser.greeting());  







