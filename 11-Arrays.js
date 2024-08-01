// Arrays

// Properties
// elements of dif type can be in the array 
// JS arrays are resizeable
// they are not associative 
// they are not multi-dimensional by default
// Arrays always make shallow copy
// shallow copy share the same refrence points
// Deep copy do not share the same reference


const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr.length) // 6

// console.log(myArr[0]);

const heroes = ['superman', 'batman', 'spiderman']


const myArr2 = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArr2[0]);

// Arrays Methods
// push() - adds an element to the end of the array
myArr.push(6);
// console.log(myArr);

// pop() - removes the last element of the array
myArr.pop()
// console.log(myArr);

//unShift
myArr.unshift(9)
// console.log(myArr);

//shift
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(2));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// Slice and Splice 
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);














