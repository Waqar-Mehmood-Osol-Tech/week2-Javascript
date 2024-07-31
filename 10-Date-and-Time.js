// Dates
// Date is an object in javascript
// In JS months started from the zero so 0 means Janurary

// let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 25)

// let myCreatedDate = new Date(2023, 0, 25, 12, 3)

// let myCreatedDate = new Date("2024-07-31")

let myCreatedDate = new Date("07-31-2024");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Date.now());

// to get the seconds from the date and time
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);

// in this funtion you are defining a object 
console.log(newDate.toLocaleString('default', {
    weekday:'long'
}));