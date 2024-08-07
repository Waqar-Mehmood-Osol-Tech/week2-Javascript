// Object Destructuring

const course = {
    courseName: 'JS',
    courseDuration: 3,
    courseFees: 5000,
}

// 1. First Method
// console.log(course.courseName)

// 2. Second Method
const { courseName } = course;
console.log(courseName);

const { courseName: cName } = course;  // you can also assign a custom name to the key of the object
console.log(cName);





