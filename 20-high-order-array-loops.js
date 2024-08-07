// For of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World";

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps
// Maps are not iteratable in for in 
const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")
map.set('China', "China")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ' : ', value);
}



// Object
// below code not run because object is not itertable

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'FIFA',
//     game3 : 'Mortal Kombat',
// }

// for (const [key, value] of myObject) {
//     console.log(key, ' :- ', value);
// }

// for in Loop
const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    python: 'Python',
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);

}

const programming = ['c++', 'js', 'pip', 'rb', 'c#', 'ts']

for (const key in programming) {
    console.log(key);
}


// For Each loop
// const coding = ['c++', 'js', 'pip', 'rb', 'c#', 'ts']

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });


// coding.forEach((item) => {
//      console.log(item);
// })

// console.log(values);


// Filter function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter((num) => num > 4);

// console.log(newNums)

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// });

// console.log(newNums);


// Another Example of Filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks);


// map function 
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num) => {
    return num + 10
})

console.log(newNums);


// Reducer Function
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8]

const total = myNums1.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0)
console.log(total);

const myTotal = myNums1.reduce((acc, currval) => acc + currval, 0)

console.log(myTotal);

