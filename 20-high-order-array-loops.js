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
const myNums = [1, 2, 3, 4 ,5 , 6 ,7  ,8, 9, 10]

// let newNums = myNums.filter((num) => num > 4);

// console.log(newNums)

const newNums = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num)
    }
});

console.log(newNums);