// const tinderUserSingleton  = new Object()  // singleton Object
// tinderUserSingleton.name = "waqar"
// tinderUserSingleton.age = 22


// // Non-singleton  Object 
// const tinderUserNonSing  = {   
//     name: 'Zain',
//     age: 23,
// }

// // And in log you can see there is no difference in the output
// console.log(tinderUserSingleton);
// console.log(tinderUserNonSing);

const user1 = {
    email: "Waqar@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Waqar",
            lastName: "Mehmood"
        }
    }
}

console.log(user1.fullname.userfullname.firstName);

// Some times we see this so its basically a check whether its a value or not 
// Basically we see this syntax when its and api call ?
console.log(user1.fullname?.userfullname.firstName);

const obj1 = {
    1: 'a',
    2: 'b',
    3: 'c',
}

const obj2 = {
    4: 'd',
    5: 'e',
    6: 'f'
}

// const obj3 = {obj1, obj2}

// Object.assign()
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// Spread
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const users = [
    {
        id: 1,
        email: "Waqar@gmail.com"
    },
    {
        id: 2,
        email: "zain@gmail.com"
    }
]

const email = users[1].email
console.log(email);

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));

console.log(users.hasOwnProperty('email'));









