// What is promise in JS
// A promise is a result object that is used to handle asynchronous operations. It represents a value that
// may not be available yet, but will be resolved at some point in the future.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Successful operation, the promise has a value.
// Rejected: Failed operation, the promise has an error.
// A promise can be created using the Promise constructor, or using the async/await syntax.
// A promise can be used to handle asynchronous operations, such as making API calls, reading files,
// or performing other I/O operations.

// 1. First Way
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB Calls, cryptography
    setTimeout(function () {
        console.log("Async Task is complete.");

        // links with the promise consumed
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log('Promise Consumed');
})

// 2. Second Way
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})


//3. Third way
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 3')
        resolve({
            username: 'waqar',
            email: "waqar@gmail.com"
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

// 4. Fourth Way
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: 'waqar',
                password: "123"
            })
        }
        else {
            reject('Error something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))


// Promise 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: 'Javascript',
                password: "123"
            })
        }
        else {
            reject('JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()


// Using async and await
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }

// }

// getAllUsers()


// ***********************************************************************************
// const getAllUsers = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// ***********************************************************************************

// console.log(getAllUsers());


//  using .then and .catch
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
